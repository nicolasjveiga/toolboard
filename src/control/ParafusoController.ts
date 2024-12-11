import Database from "../db/Database";
import ParafusoMaquina from "../model/ParafusoMaquina";
import ParafusoSoberbo from "../model/ParafusoSoberbo";
import { Parafuso } from "../model/Parafuso";

export default class ParafusoController{

    private db!: Database;
    
    constructor(db: Database) {
        this.db = db; //Injeção de dependência do database
        //O ParafusoController depende da funcionalidade de Database, mas ele não cria a instância
        // diretamente. Em vez disso, o Router injeta essa dependência.
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

