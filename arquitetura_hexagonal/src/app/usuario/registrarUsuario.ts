import Usuario from "@/core/usuario/model/Usuario";
import TerminalUtil from "../util/TerminalUtil";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import SenhaCripto from "@/adapter/auth/SenhaCripto";
import RepositorioPg from "@/adapter/db/RepositorioPg";

export default async function registrarUsuario() {
    const { campoRequerido, titulo, sucesso, error, esperarEnter } = TerminalUtil;
    titulo('Registrar Usuário');    

    const nome = await campoRequerido("Nome: ", "Otacneto");
    const email = await campoRequerido("Email: ", "otacneto@twitch.com");
    const senha = await campoRequerido("Senha: ", "123456");

    const usuario: Usuario = {nome, email, senha};    

    try {
        const provedorCripto = new SenhaCripto();
        const repositorio = new RepositorioPg();
        const casoDeUso = new RegistrarUsuario(repositorio, provedorCripto);

        await casoDeUso.executar(usuario);

        sucesso("Usuário registrado com sucesso.");
    } catch (e: any) {
        error(e.message);
    } finally {
        await esperarEnter();
    }
}