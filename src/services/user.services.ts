import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IresponseUserLogin, IUser, IUserCreat } from '../models/user';
import { IuserRepository } from '../connection/knex/user';
import { senhajtw } from '../senhajwt';

export class userService { 
    constructor(private userRepository: IuserRepository) { }
    
    async getUserById(id: number): Promise<IUser> {
        const user = await this.userRepository.getUserById(id);
        if (!user) {
            throw new Error("Usuario não encontrado");
        }
        return user;
    }

    async createUser(user: IUserCreat): Promise<void> {
        const userExist = await this.userRepository.getUserByEmail(user.email);
        if (userExist) {
            throw new Error("Usuario já existe");
        }
        const hashPassword = await bcrypt.hash(user.senha, 10);
        user.senha = hashPassword;
        await this.userRepository.createUser(user);
    }

    async Userlogin(email: string, senha: string): Promise<IresponseUserLogin> {
        const user = await this.userRepository.getUserByEmail(email);
        if (!user) {
            throw new Error("Usuario não encontrado");
        }
        const passwordMatch = await bcrypt.compare(senha, user.senha);
        if (!passwordMatch) {
            throw new Error("Senha incorreta");
        }
        const token = jwt.sign({ id: user.id }, senhajtw, { expiresIn: "1h" });
        
        const { senha: userSenha, ...userWithoutPassword } = user;
        return { usuario: { ...userWithoutPassword }, token };
    }
}