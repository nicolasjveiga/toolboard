"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../db/Database"));
const ParafusoMaquina_1 = __importDefault(require("../model/ParafusoMaquina"));
describe("Database", () => {
    let db;
    beforeEach(() => {
        db = new Database_1.default();
    });
    it("deve adicionar um parafuso e recuperá-lo", () => {
        const parafuso = new ParafusoMaquina_1.default();
        parafuso.setEspessura("10mm");
        parafuso.setComprimento("50mm");
        parafuso.setRosca("MA");
        parafuso.setClasseResistencia("8.8");
        db.add(parafuso);
        const parafusos = db.getAll();
        expect(parafusos.length).toBe(1);
        expect(parafusos[0].getEspessura()).toBe("10mm");
    });
});
