import { terminal } from 'terminal-kit'

export default class TerminalUtil {

    static titulo(texto: string) {
        terminal.clear();
        terminal.magenta(`${texto}\n`);
        terminal.magenta(`-`.repeat(texto.length) + `\n`);
    }

    static limpar() {
        terminal.clear();
    }

    static exibirChaveValor(chave: string, valor: any) {
        terminal.yellow(chave).green(valor).white('\n');
    }

    static async menu(opcoes: string[]): Promise<[number, string]> {
        const resposta = await terminal.singleColumnMenu(opcoes).promise;
        return [resposta.selectedIndex, resposta.selectedText];
    }

    static async selecao(texto: string, opcoes: string[]): Promise<[number, string]> {
        terminal.yellow(`\n${texto}`);
        const resposta = await terminal.singleLineMenu(opcoes).promise;
        return [resposta.selectedIndex, resposta.selectedText];
    }

    static async confirmacao(texto: string): Promise<boolean> {
        terminal.yellow(`\n${texto}`);
        const resposta = await terminal.singleLineMenu(['Sim', 'Não']).promise;
        return resposta.selectedIndex === 0;
    }

    static async esperarEnter(): Promise<void> {
        terminal.white('\n Pressione ENTER para continuar...');
        await terminal.inputField({ echo: false }).promise;
    }

    static async campoRequerido(label: string, valorPadrao: string = ''): Promise<string> {
        terminal.yellow(`\n${label}`);
        const valor = await terminal.inputField({ default: valorPadrao }).promise;

        if(valor) return valor;
        return TerminalUtil.campoRequerido(label);
    }

    static async sucesso(texto:string) {
        terminal.green('\n\n' + texto);
    }

    static async error(texto:string) {
        terminal.red('\n\n' + texto);
    }
}