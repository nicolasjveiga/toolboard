import Database from "../db/Database";
import ParafusoController from "./ParafusoController";
import PrimaryScreen from "../view/PrimaryScreen";

export default class Router {
    private db: Database = new Database();
    private ps: PrimaryScreen = new PrimaryScreen(this);
    public parafusoController: ParafusoController = new ParafusoController(this.db);

    public getDatabase(): Database{
        return this.db;
    }

    constructor(){
        this.ps.getFirstScreen();
    }
}   