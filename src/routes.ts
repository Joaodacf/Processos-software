import express from 'express';
import validarRequisicao from './Midleware/midleSchema';
import { userSchema } from './schema/user.schema';
import { CadastroUsuario, LoginUsuario } from './controller/user';
import { userLoginSchema } from './schema/userlogin.schema';

export const routes = express();


routes.post('/cadastro', validarRequisicao(userSchema), CadastroUsuario);
routes.post('/login', validarRequisicao(userLoginSchema), LoginUsuario)