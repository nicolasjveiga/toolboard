import Parafuso from "../model/Parafuso";

export default class Database {

    private parafusos: Parafuso[] = [];

    public getAllParafusos(): Parafuso[]{
        return this.parafusos
    }

    public addNewParafuso(parafuso: Parafuso): void{
        this.parafusos.push(parafuso);
    }

    

}