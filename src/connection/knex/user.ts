import { IUser, IUserCreat } from "../../models/user";

export interface IuserRepository {
    getUserByEmail(email: string): Promise<IUser>;
    getUserById(id: number): Promise<IUser>;
    createUser(user: IUserCreat): Promise<void>;
}