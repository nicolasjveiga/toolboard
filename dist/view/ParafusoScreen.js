"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
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
    listParafusos() {
        const parafusos = this.router.getDatabase().getAllParafusos();
        if (parafusos.length === 0) {
            console.log("Nenhum Parafuso cadastrado.");
        }
        else {
            console.log("Lista de Parafusos Cadastrados:");
            parafusos.forEach((parafuso, index) => {
                console.log(`\n Parafuso ${index + 1}`);
                console.log(`Espessura: ${parafuso.getEspessura()}`);
                console.log(`Comprimento: ${parafuso.getComprimento()}`);
            });
        }
    }
}
exports.default = ParafusoScreen;
