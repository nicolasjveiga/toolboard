"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Parafuso_1 = require("./Parafuso");
class ParafusoMaquina extends Parafuso_1.Parafuso {
    getRosca() {
        return this.rosca;
    }
    setRosca(rosca) {
        this.rosca = rosca;
    }
    getDescricao() {
        return `Parafuso máquina: rosca - ${this.rosca}`;
    }
}
exports.default = ParafusoMaquina;
