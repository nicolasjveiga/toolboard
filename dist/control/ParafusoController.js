"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParafusoMaquina_1 = __importDefault(require("../model/ParafusoMaquina"));
const ParafusoSoberbo_1 = __importDefault(require("../model/ParafusoSoberbo"));
class ParafusoController {
    constructor(db) {
        this.db = db;
    }
    registerNewParafuso(parafuso) {
        this.db.add(parafuso);
    }
    getNewParafusoMaquina() {
        return new ParafusoMaquina_1.default;
    }
    registerParafusoMaquina(parafusoMaquina) {
        this.db.add(parafusoMaquina);
    }
    getNewParafusoSoberbo() {
        return new ParafusoSoberbo_1.default;
    }
    registerParafusoSoberbo(ParafusoSoberbo) {
        this.db.add(ParafusoSoberbo);
    }
}
exports.default = ParafusoController;
