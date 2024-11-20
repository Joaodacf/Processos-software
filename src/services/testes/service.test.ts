import { describe, it, expect, jest } from '@jest/globals';
import { Request, Response } from 'express';

import { knexuserRepository } from '../../connection/knex/Iuser.respository';
import { userService } from '../../services/user.services';
import { CadastroUsuario } from '../../controller/user';

describe("user controller", () => {
    const mockRequest = (body: any) => ({
        body
    }) as Request;

    const mockResponse = () => {
        const res = {} as Response;
        res.status = jest.fn().mockReturnValue(res) as unknown as (code: number) => Response;
        res.json = jest.fn().mockReturnValue(res) as unknown as (body?: any) => Response;
        return res;
    };

    it("should create a new user", async () => {
        const req = mockRequest({ nome: "John Doe", email: "john@example.com", senha: "password123" });
        const res = mockResponse();
        const userServiceInstance = new userService(new knexuserRepository());
        jest.spyOn(userServiceInstance, 'createUser').mockResolvedValue();

        await CadastroUsuario(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ message: "Usuário cadastrado com sucesso" });
    });

    it("should return an error if user already exists", async () => {
        const req = mockRequest({ nome: "John Doe", email: "john@example.com", senha: "password123" });
        const res = mockResponse();
        const userServiceInstance = new userService(new knexuserRepository());
        jest.spyOn(userServiceInstance, 'createUser').mockRejectedValue(new Error("Usuario já existe"));

        await CadastroUsuario(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: "Usuario já existe" });
    });

    it("should return an error if email is missing", async () => {
        const req = mockRequest({ nome: "John Doe", senha: "password123" });
        const res = mockResponse();
        const userServiceInstance = new userService(new knexuserRepository());

        await CadastroUsuario(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: "Email é obrigatório" });
    });

    it("should return an error if password is missing", async () => {
        const req = mockRequest({ nome: "John Doe", email: "john@example.com" });
        const res = mockResponse();
        const userServiceInstance = new userService(new knexuserRepository());

        await CadastroUsuario(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: "Senha é obrigatória" });
    });

    it("should return an error if email is too long", async () => {
        const req = mockRequest({ nome: "John Doe", email: "a".repeat(256) + "@example.com", senha: "password123" });
        const res = mockResponse();
        const userServiceInstance = new userService(new knexuserRepository());

        await CadastroUsuario(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: "Email é muito longo" });
    });

    it("should return an error if password is too short", async () => {
        const req = mockRequest({ nome: "John Doe", email: "john@example.com", senha: "123" });
        const res = mockResponse();
        const userServiceInstance = new userService(new knexuserRepository());

        await CadastroUsuario(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: "Senha é muito curta" });
    });

    it("should return an error if database is unavailable", async () => {
        const req = mockRequest({ nome: "John Doe", email: "john@example.com", senha: "password123" });
        const res = mockResponse();
        const userServiceInstance = new userService(new knexuserRepository());
        jest.spyOn(userServiceInstance, 'createUser').mockRejectedValue(new Error("Database unavailable"));

        await CadastroUsuario(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Database unavailable" });
    });
});