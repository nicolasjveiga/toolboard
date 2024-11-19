"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        this.parafusos = [];
    }
    getAllParafusos() {
        return this.parafusos;
    }
    addNewParafuso(parafuso) {
        this.parafusos.push(parafuso);
    }
}
exports.default = Database;
