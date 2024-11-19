"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const ParafusoScreen_1 = __importDefault(require("./ParafusoScreen"));
class PrimaryScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
        this.parafusoScreen = new ParafusoScreen_1.default(this.router);
    }
    getFirstScreen() {
        let showScreen = true;
        while (showScreen) {
            let choice = this.prompt("Escolha\n1 - Cadastro\n2 - Listar\n3 - Apagar\n5 - Sair\n");
            switch (choice) {
                case "1":
                    this.parafusoScreen.registerParafuso();
                    break;
                case "2":
                    this.parafusoScreen.listParafusos();
                default:
                    console.log("Opção inválida");
                    break;
            }
        }
    }
}
exports.default = PrimaryScreen;
