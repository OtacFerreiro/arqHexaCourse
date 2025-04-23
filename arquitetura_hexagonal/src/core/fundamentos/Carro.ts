export default interface Carro {
    readonly velocidadeMax: number;
    velocidadeAtual: number;
    acelerar(): void;
    frear(): void;
}