"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class DeleteScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
    }
    getDeleteScreen() {
        const parafusos = this.router.getDatabase().getAll();
        if (parafusos.length === 0) {
            console.log("Nenhum parafuso cadastrado para apagar.");
            return;
        }
        console.log("Selecione o índice do parafuso a ser apagado");
        parafusos.forEach((parafuso, index) => {
            console.log(`${index}: ${parafuso.constructor.name} - ${parafuso.getDescricao()}`);
        });
        const input = this.prompt("Digite o índice: ");
        const indexToDelete = parseInt(input);
        if (isNaN(indexToDelete) || indexToDelete < 0 || indexToDelete >= parafusos.length) {
            console.log("Índice Inválido");
            return;
        }
        this.router.getDatabase().removeAt(indexToDelete);
    }
}
exports.default = DeleteScreen;
