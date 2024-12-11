import Resistencia from "./Resistencia";

export abstract class Parafuso {
    private espessura!: string;
    private comprimento!: string;

    public getEspessura(): string {
        return this.espessura;
    }

    public setEspessura(expessura: string): void {
        this.espessura = expessura;
    }

    public getComprimento(): string {
        return this.comprimento;
    }
    
    public setComprimento(comprimento: string): void {
        this.comprimento = comprimento;
    }

    public abstract getClasseResistencia(): string;

    public abstract getDescricao(): string;
}