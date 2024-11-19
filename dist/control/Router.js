"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../db/Database"));
const ParafusoController_1 = __importDefault(require("./ParafusoController"));
const PrimaryScreen_1 = __importDefault(require("../view/PrimaryScreen"));
//import ParafusoScreen from "../view/ParafusoScreen";
class Router {
    getDatabase() {
        return this.db;
    }
    constructor() {
        this.db = new Database_1.default();
        this.ps = new PrimaryScreen_1.default(this);
        this.parafusoController = new ParafusoController_1.default(this.db);
        this.ps.getFirstScreen();
    }
}
exports.default = Router;
