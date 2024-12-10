"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Parafuso_1 = require("./Parafuso");
class ParafusoSoberbo extends Parafuso_1.Parafuso {
    getBucha() {
        return this.bucha;
    }
    setBucha(bucha) {
        this.bucha = bucha;
    }
    getDescricao() {
        return `Parafuso Soberbo: bucha - ${this.bucha}`;
    }
}
exports.default = ParafusoSoberbo;
