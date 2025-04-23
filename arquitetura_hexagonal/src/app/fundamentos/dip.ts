import corrida from "@/core/fundamentos/corrida";
import TerminalUtil from "../util/TerminalUtil";
import Carro from "@/core/fundamentos/Carro";
import Ferrari from "@/core/fundamentos/Ferrari";
import Fusca from "@/core/fundamentos/Fusca";

export default async function dip() {
        TerminalUtil.titulo('DIP');

        const [tipoCarro] = await TerminalUtil.selecao('Tipo de Carro?', ['Ferrari', 'Fusca']);
        const carro: Carro = tipoCarro === 0 ? new Ferrari() : new Fusca();

        corrida(carro);
        await TerminalUtil.esperarEnter();
}