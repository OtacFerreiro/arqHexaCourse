import LoginUsuario from "@/core/usuario/service/LoginUsuario";
import { Express } from 'express';
import ProvedorJwt from "./ProvedorJwt";

export default class LoginUsuarioController {
    constructor(servidor: Express, casoDeUso: LoginUsuario, ...middlewares: any[]) {

        servidor.get('/api/usuarios/login', ...middlewares, async(req, resp) => {
            try {
                const usuario = await casoDeUso.executar({
                    email: req.body.email,
                    senha: req.body.senha
                });

                const provedorJwt = new ProvedorJwt(process.env.JWT_SECRET ?? '');

                resp.status(200).send({
                    usuario,
                    token: provedorJwt.gerar(usuario)
                });
            } catch (error: any) {
                resp.status(400).send(error.message);
            }       
        });        
    }
}