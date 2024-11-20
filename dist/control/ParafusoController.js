"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Parafuso_1 = __importDefault(require("../model/Parafuso"));
const ParafusoMaquina_1 = __importDefault(require("../model/ParafusoMaquina"));
const ParafusoSoberbo_1 = __importDefault(require("../model/ParafusoSoberbo"));
class ParafusoController {
    constructor(db) {
        this.db = db;
    }
    getNewParafuso() {
        return new Parafuso_1.default();
    }
    registerNewParafuso(parafuso) {
        this.db.addNewParafuso(parafuso);
    }
    getNewParafusoMaquina() {
        return new ParafusoMaquina_1.default;
    }
    registerParafusoMaquina(parafusoMaquina) {
        this.db.addNewParafuso(parafusoMaquina);
    }
    getNewParafusoSoberbo() {
        return new ParafusoSoberbo_1.default;
    }
    registerParafusoSoberbo(ParafusoSoberbo) {
        this.db.addNewParafuso(ParafusoSoberbo);
    }
}
exports.default = ParafusoController;
