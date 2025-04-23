import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import RegistrarUsuario from './core/usuario/service/RegistrarUsuario';
import RepositorioPg from './external/db/RepositorioPg';
import SenhaCripto from './external/auth/SenhaCripto';
import LoginUsuario from './core/usuario/service/LoginUsuario';
import LoginUsuarioController from './external/api/LoginUsuarioController';
import RegistrarUsuarioController from './external/api/RegistrarUsuarioController';
const app = express();
const porta = process.env.API_PORT ?? 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}!`)
});

//------------------------------------- Rotas
const repositorioUsuario = new RepositorioPg();
const provedorCripto = new SenhaCripto();
const registrarUsuario = new RegistrarUsuario(repositorioUsuario, provedorCripto);
const loginUsuario = new LoginUsuario(repositorioUsuario, provedorCripto);

new RegistrarUsuarioController(app, registrarUsuario);
new LoginUsuarioController(app, loginUsuario);