import Database from "../db/Database";
import ParafusoController from "./ParafusoController";
import PrimaryScreen from "../view/PrimaryScreen";
import { Parafuso } from "../model/Parafuso";

export default class Router {
    private db: Database<Parafuso> = new Database<Parafuso>();
    private ps: PrimaryScreen = new PrimaryScreen(this);
    public parafusoController: ParafusoController = new ParafusoController(this.db);

    public getDatabase(): Database<Parafuso>{
        return this.db;
    }

    constructor(){
        this.ps.getFirstScreen();
    }
}   