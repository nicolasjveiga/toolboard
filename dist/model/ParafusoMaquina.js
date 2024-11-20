"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Parafuso_1 = __importDefault(require("./Parafuso"));
class ParafusoMaquina extends Parafuso_1.default {
    //constructor(espessura: string, comprimento: string, rosca: string) {
    //    super(espessura, comprimento);
    //    this.rosca = rosca;
    //}
    getRosca() {
        return this.rosca;
    }
    setRosca(rosca) {
        this.rosca = rosca;
    }
}
exports.default = ParafusoMaquina;
