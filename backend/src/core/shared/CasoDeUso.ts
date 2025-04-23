export default interface CasoDeUso<e, s> {
    executar(entrada: e): Promise<s>
}