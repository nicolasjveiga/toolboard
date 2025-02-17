import Database from "../db/Database";
import { Parafuso } from "../model/Parafuso";
import ParafusoMaquina from "../model/ParafusoMaquina";

describe("Database", () => {
    let db: Database<Parafuso>;
    
    beforeEach(() => {
        db = new Database();
    });
       
    it("deve adicionar um parafuso e recuperá-lo", () => {
        const parafuso = new ParafusoMaquina();
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