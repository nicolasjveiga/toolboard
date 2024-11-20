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
            console.clear();
            console.log("|=========ToolBoard=========|");
            console.log("|1 - Cadastro               |");
            console.log("|2 - Listar                 |");
            console.log("|3 - Apagar                 |");
            console.log("|4 - Sair                   |");
            console.log("|___________________________|");
            let choice = this.prompt("> ");
            switch (choice) {
                case "1":
                    console.log("|=====Escolha Cadastro:=====|");
                    console.log("|1 - Parafuso Máquina       |");
                    console.log("|2 - Parafuso Soberbo       |");
                    console.log("|___________________________|");
                    let choice2 = this.prompt("> ");
                    switch (choice2) {
                        case "1":
                            this.parafusoScreen.registerParafusoMaquina();
                            break;
                        case "2":
                            this.parafusoScreen.regiterParafusoSoberbo();
                            break;
                        default:
                            console.log("Opção inválida");
                            break;
                    }
                    break;
                case "2":
                    this.parafusoScreen.listParafusos();
                    break;
                case "4":
                    console.log("Saindo...");
                    showScreen = false;
                    break;
                default:
                    console.log("Opção inválida");
                    break;
            }
            this.prompt("Pressione Enter para continuar");
        }
    }
}
exports.default = PrimaryScreen;
