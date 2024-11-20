"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const ParafusoMaquina_1 = __importDefault(require("../model/ParafusoMaquina"));
const ParafusoSoberbo_1 = __importDefault(require("../model/ParafusoSoberbo"));
class ParafusoScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
    }
    registerParafuso() {
        let parafuso = this.router.parafusoController.getNewParafuso();
        let parafusoEspessura = this.prompt("Digite a espessura do Parafuso: ");
        parafuso.setEspessura(parafusoEspessura);
        let parafusoComprimento = this.prompt("Digite o comprimento do Parafuso: ");
        parafuso.setComprimento(parafusoComprimento);
        this.router.parafusoController.registerNewParafuso(parafuso);
    }
    registerParafusoMaquina() {
        let parafusoMaquina = this.router.parafusoController.getNewParafusoMaquina();
        let parafusoEspessura = this.prompt("Digite a espessura do Parafuso Máquina: ");
        parafusoMaquina.setEspessura(parafusoEspessura);
        let parafusoComprimento = this.prompt("Digite o comprimento do Parafuso Máquina: ");
        parafusoMaquina.setComprimento(parafusoComprimento);
        let parafusoMaquinaRosca = this.prompt("Digite a rosca do Parafuso (ex: Rosca grossa ou fina): ");
        parafusoMaquina.setRosca(parafusoMaquinaRosca);
        this.router.parafusoController.registerNewParafuso(parafusoMaquina);
    }
    regiterParafusoSoberbo() {
        let parafusoSoberbo = this.router.parafusoController.getNewParafusoSoberbo();
        let parafusoEspessura = this.prompt("Digite a espessura do Parafuso Soberbo: ");
        parafusoSoberbo.setEspessura(parafusoEspessura);
        let parafusoComprimento = this.prompt("Digite o comprimento do Parafuso Soberbo: ");
        parafusoSoberbo.setComprimento(parafusoComprimento);
        let parafusoSoberboBucha = this.prompt("Digite a medida da bucha do Parafuso: ");
        parafusoSoberbo.setBucha(parafusoSoberboBucha);
        this.router.parafusoController.registerNewParafuso(parafusoSoberbo);
    }
    listParafusos() {
        const parafusos = this.router.getDatabase().getAllParafusos();
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
                if (parafuso instanceof ParafusoMaquina_1.default) {
                    console.log(`Rosca: ${parafuso.getRosca()}`);
                }
                else if (parafuso instanceof ParafusoSoberbo_1.default) {
                    console.log(`Bucha: ${parafuso.getBucha()}`);
                }
                console.log("");
            });
        }
    }
}
exports.default = ParafusoScreen;
