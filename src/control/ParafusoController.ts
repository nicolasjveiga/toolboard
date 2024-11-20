import Database from "../db/Database";
import Parafuso from "../model/Parafuso";
import ParafusoMaquina from "../model/ParafusoMaquina";
import ParafusoSoberbo from "../model/ParafusoSoberbo";


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

    public getNewParafusoMaquina(): ParafusoMaquina{
        return new ParafusoMaquina;
    }
    public registerParafusoMaquina(parafusoMaquina: ParafusoMaquina): void{
        this.db.addNewParafuso(parafusoMaquina);
    }

    public getNewParafusoSoberbo(): ParafusoSoberbo{
        return new ParafusoSoberbo;
       }
       public registerParafusoSoberbo(ParafusoSoberbo: ParafusoSoberbo): void{
           this.db.addNewParafuso(ParafusoSoberbo);
       }
}

