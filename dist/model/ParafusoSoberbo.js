"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Parafuso_1 = __importDefault(require("./Parafuso"));
class ParafusoSoberbo extends Parafuso_1.default {
    getBucha() {
        return this.bucha;
    }
    setBucha(bucha) {
        this.bucha = bucha;
    }
}
exports.default = ParafusoSoberbo;
