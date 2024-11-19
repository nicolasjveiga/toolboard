import Database from "../db/Database";
import Parafuso from "../model/Parafuso";


export default class ParafusoController{

    private db!: Database;
    
    constructor(db: Database) {
        this.db = db;
    }

    public getNewParafuso(): Parafuso{
        return new Parafuso();
    }

    public registerNewParafuso(parafuso: Parafuso): void {
        this.db.addNewParafuso(parafuso);
    }
}