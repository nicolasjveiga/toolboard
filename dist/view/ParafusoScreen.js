"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const InvalidInputException_1 = __importDefault(require("../model/InvalidInputException"));
class ParafusoScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
    }
    registerParafusoMaquina() {
        let parafusoMaquina = this.router.parafusoController.getNewParafusoMaquina();
        let parafusoEspessura = this.prompt("Digite a espessura do Parafuso Máquina: ");
        parafusoMaquina.setEspessura(parafusoEspessura);
        let parafusoComprimento = this.prompt("Digite o comprimento do Parafuso Máquina: ");
        parafusoMaquina.setComprimento(parafusoComprimento);
        let parafusoMaquinaRosca;
        while (true) {
            try {
                parafusoMaquinaRosca = this.prompt("Digite a rosca do Parafuso (ex: MA ou MB): ");
                if (parafusoMaquinaRosca !== "MA" && parafusoMaquinaRosca !== "MB") {
                    throw new InvalidInputException_1.default("Rosca inválida, utilize MA ou MB.");
                }
                break;
            }
            catch (e) {
                console.log(e.message);
            }
        }
        parafusoMaquina.setRosca(parafusoMaquinaRosca);
        let parafusoMaquinaResistencia;
        while (true) {
            try {
                parafusoMaquinaResistencia = this.prompt("Digite a Resistência do parafuso(ex:5.8 ou 8.8):");
                if (parafusoMaquinaResistencia !== "5.8" && parafusoMaquinaResistencia !== "8.8") {
                    throw new InvalidInputException_1.default("Resistencia inválida, Utilize 8.8 ou 5.8");
                }
                break;
            }
            catch (e) {
                console.log(e.message);
            }
        }
        parafusoMaquina.setClasseResistencia(parafusoMaquinaResistencia);
        this.router.parafusoController.registerParafusoMaquina(parafusoMaquina);
    }
    registerParafusoSoberbo() {
        let parafusoSoberbo = this.router.parafusoController.getNewParafusoSoberbo();
        let parafusoEspessura = this.prompt("Digite a espessura do Parafuso Soberbo: ");
        parafusoSoberbo.setEspessura(parafusoEspessura);
        let parafusoComprimento = this.prompt("Digite o comprimento do Parafuso Soberbo: ");
        parafusoSoberbo.setComprimento(parafusoComprimento);
        let parafusoSoberboBucha = this.prompt("Digite a medida da bucha do Parafuso: ");
        parafusoSoberbo.setBucha(parafusoSoberboBucha);
        let parafusoSoberboResistencia = this.prompt("Digite a Resistência do parafuso(ex: 5.8 ou 8.8):");
        while (true) {
            try {
                parafusoSoberboResistencia = this.prompt("Digite a Resistência do parafuso(ex:5.8 ou 8.8):");
                if (parafusoSoberboResistencia !== "5.8" && parafusoSoberboResistencia !== "8.8") {
                    throw new InvalidInputException_1.default("Resistencia inválida, Utilize 8.8 ou 5.8");
                }
                break;
            }
            catch (e) {
                console.log(e.message);
            }
        }
        parafusoSoberbo.setClasseResistencia(parafusoSoberboResistencia);
        this.router.parafusoController.registerParafusoSoberbo(parafusoSoberbo);
    }
    listParafusos() {
        const parafusos = this.router.getDatabase().getAll();
        if (parafusos.length === 0) {
            console.log("Nenhum Parafuso cadastrado.");
        }
        else {
            console.log("Lista de Parafusos Cadastrados:");
            parafusos.forEach((parafuso, index) => {
                console.log(`\n Parafuso ${index + 1}`);
                console.log(`Tipo: ${parafuso.constructor.name}`);
                console.log(`Espessura: ${parafuso.getEspessura()}`);
                console.log(`Comprimento: ${parafuso.getComprimento()}`);
                console.log(`Resistência: ${parafuso.getClasseResistencia()} `);
            });
        }
    }
}
exports.default = ParafusoScreen;
