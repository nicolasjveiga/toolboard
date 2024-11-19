import Parafuso from "./Parafuso";

export default class ParafusoMaquina extends Parafuso{
    private rosca!: string;

    /*constructor(espessura: string, comprimento: string, rosca: string) {
        super(espessura, comprimento);
        this.rosca = rosca;
    }*/

    public getRosca(): string {
        return this.rosca;
    }

    public setRosca(rosca: string): void {
        this.rosca = rosca 
    }
}