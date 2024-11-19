export default class Parafuso {
    private espessura!: number;
    private comprimento!: number;

    public getEspessura(): number {
        return this.espessura;
    }

    public setEspessura(expessura: number): void {
        this.espessura = expessura;
    }

    public getComprimento(): number {
        return this.comprimento;
    }
    
    public setComprimento(comprimento: number): void {
        this.comprimento = comprimento;
    }
}