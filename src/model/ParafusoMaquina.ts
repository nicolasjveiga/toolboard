import { Parafuso } from "./Parafuso";
import Resistencia from "./Resistencia";

export default class ParafusoMaquina extends Parafuso implements Resistencia{
    private rosca!: string;
    private classeResistencia!: string;

    public getRosca(): string {
        return this.rosca;
    }

    public setRosca(rosca: string): void {
        this.rosca = rosca; 
    }

    public getClasseResistencia(): string {
        return this.classeResistencia;
    }

    public setClasseResistencia(resistencia: string): void{
        this.classeResistencia = resistencia;
    }

    public getDescricao(): string {
        return `Parafuso Máquina: rosca - ${this.rosca}`;
    }
}