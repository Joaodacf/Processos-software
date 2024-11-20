import knex from "../connection.knex";
import { IUser , IUserCreat } from "../../models/user";
import { IuserRepository } from "./user";

export class knexuserRepository implements IuserRepository {
    async getUserById(id: number): Promise<IUser> {
        return await knex('usuarios').where({ id }).first();
    }
    async createUser(user: IUserCreat): Promise<void> {
        return await knex('usuarios').insert(user);
    }
    async getUserByEmail(email: string): Promise<IUser> {
        return await knex('usuarios').where({ email }).first();

    }
   
}





