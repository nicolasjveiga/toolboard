"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Parafuso_1 = __importDefault(require("../model/Parafuso"));
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
}
exports.default = ParafusoController;
