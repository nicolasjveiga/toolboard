import Database from "../db/Database";
import ParafusoMaquina from "../model/ParafusoMaquina";
import ParafusoSoberbo from "../model/ParafusoSoberbo";
import { Parafuso } from "../model/Parafuso";

export default class ParafusoController{

    private db!: Database<Parafuso>;
    
    constructor(db: Database<Parafuso>) {
        this.db = db;
    }

    public registerNewParafuso(parafuso: Parafuso): void {
        this.db.add(parafuso);
    }

    public getNewParafusoMaquina(): ParafusoMaquina{
        return new ParafusoMaquina;
    }
    
    public registerParafusoMaquina(parafusoMaquina: ParafusoMaquina): void{
        this.db.add(parafusoMaquina);
    }

    public getNewParafusoSoberbo(): ParafusoSoberbo{
        return new ParafusoSoberbo;
       }

    public registerParafusoSoberbo(ParafusoSoberbo: ParafusoSoberbo): void{
       this.db.add(ParafusoSoberbo);
    }
}

