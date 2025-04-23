import Carro from "./Carro";

export default class Ferrari implements Carro {
    constructor(
       readonly velocidadeMax: number = 324,
       private _velocidadeAtual: number = 0
    ) {}

    acelerar(): void {
        this._velocidadeAtual = Math.min(
            this._velocidadeAtual + 20,
            this.velocidadeMax
        );
    }

    frear(): void {
        this._velocidadeAtual = Math.max(
           this._velocidadeAtual - 20,
           0
        );
    }

    get velocidadeAtual(): number {
        return this._velocidadeAtual;
    }
}