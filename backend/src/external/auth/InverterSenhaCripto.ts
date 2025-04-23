import ProvedorCriptografia from "../../core/usuario/service/ProvedorCriptografia";

export default class InverterSenhaCripto implements ProvedorCriptografia {
    comparar(senha: string, senhaCripto: string): boolean {
        return this.criptografar(senha) === senhaCripto
    }
    criptografar(senha: string): string {
        return senha.split('').reverse().join('');
    }
}

