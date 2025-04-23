import Usuario from "@/core/usuario/model/Usuario";
import RepositorioUsuario from "@/core/usuario/service/RepositorioUsuario";


export default class RepositorioUsuarioEmMemoria implements RepositorioUsuario {
    private static readonly itens: Usuario[] = [];

    async inserir(usuario: Usuario) {
        const itens = RepositorioUsuarioEmMemoria.itens;
        const usuarioFound = await this.buscarPorEmail(usuario.email);
        if(usuarioFound) return;
        itens.push(usuario);
    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        const itens = RepositorioUsuarioEmMemoria.itens;
        return itens.find(usuario => usuario.email === email) ?? null;
    }
}