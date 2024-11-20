import { Request, Response } from "express";
import { IUser, IUserCreat } from "../models/user"
import{userService}  from "../services/user.services"
import { knexuserRepository } from "../connection/knex/Iuser.respository";

const userservice = new userService(new knexuserRepository())

export async function CadastroUsuario(req: Request, res: Response): Promise<any>{
    const { nome, email, senha }: IUserCreat = req.body;

    try {
          await userservice.createUser({ nome, email, senha });
        
        return res.status(201).json({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
        return res.status(400).json({ message: error?.message || "Erro ao cadastrar usuário" });
    }
}

export async function LoginUsuario(req: Request, res: Response):Promise<any> {
    const { email, senha } = req.body;

    try {
        const response = await userservice.Userlogin(email, senha);
        return res.status(200).json(response);
    } catch (error: any) {
        return res.status(400).json({ message: error?.message || "Erro ao fazer login" });
    }
}

