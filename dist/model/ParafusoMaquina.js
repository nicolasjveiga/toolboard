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
    getClasseResistencia() {
        return this.classeResistencia;
    }
    setClasseResistencia(resistencia) {
        this.classeResistencia = resistencia;
    }
    getDescricao() {
        return `Parafuso Máquina: rosca - ${this.rosca}`;
    }
}
exports.default = ParafusoMaquina;
