import { Parafuso } from "./Parafuso";
import Resistencia from "./Resistencia";

export default class ParafusoSoberbo extends Parafuso implements Resistencia {
    private bucha!: string;
    private classeResistencia!: string; 

    public getBucha(): string {
        return this.bucha;
    }

    public setBucha(bucha: string): void {
        this.bucha = bucha; 
    }
    
    public getClasseResistencia(): string {
        return this.classeResistencia
    }

    public setClasseResistencia(resistencia: string): void {
        this.classeResistencia = resistencia;
    }

    public getDescricao(): string {
        return `Parafuso Soberbo: bucha - ${this.bucha}`;
    }
}