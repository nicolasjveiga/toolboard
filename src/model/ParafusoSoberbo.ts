import { Parafuso } from "./Parafuso";

export default class ParafusoSoberbo extends Parafuso {
    private bucha!: string;

    public getBucha(): string {
        return this.bucha;
    }

    public setBucha(bucha: string): void {
        this.bucha = bucha; 
    }

    public getDescricao(): string {
        return `Parafuso Soberbo: bucha - ${this.bucha}`;
    }
}