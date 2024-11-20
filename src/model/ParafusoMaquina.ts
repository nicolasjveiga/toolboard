import Parafuso from "./Parafuso";

export default class ParafusoMaquina extends Parafuso{
    private rosca!: string;
    
    public getRosca(): string {
        return this.rosca;
    }

    public setRosca(rosca: string): void {
        this.rosca = rosca 
    }
}