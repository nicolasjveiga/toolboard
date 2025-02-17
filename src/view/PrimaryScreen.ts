import promptSync from "prompt-sync"
import Router from "../control/Router";
import ParafusoScreen from "./ParafusoScreen";
import DeleteScreen from "./DeleteSreen";

export default class PrimaryScreen {
    private prompt = promptSync();
    private parafusoScreen!: ParafusoScreen;
    private router!: Router;
    
    constructor(router: Router){
        this.router = router;
        this.parafusoScreen = new ParafusoScreen(this.router);
    }

    public getFirstScreen(): void {
        let showScreen: boolean = true;

        while (showScreen) {
            console.clear();
            console.log("|=========ToolBoard=========|")
            console.log("|1 - Cadastro               |");
            console.log("|2 - Listar                 |");
            console.log("|3 - Apagar                 |");
            console.log("|4 - Sair                   |");
            console.log("|___________________________|");
            let choice = this.prompt("> ")
            
            switch (choice) {
                case "1":
                    console.log("|=====Escolha Cadastro:=====|");
                    console.log("|1 - Parafuso Máquina       |")
                    console.log("|2 - Parafuso Soberbo       |");
                    console.log("|___________________________|")
                    
                    let choice2 = this.prompt("> ");
                    switch (choice2) {
                        case "1":
                            this.parafusoScreen.registerParafusoMaquina();
                            break;    
                        case "2":
                            this.parafusoScreen.registerParafusoSoberbo();
                            break;
                        default: 
                            console.log("Opção inválida");
                            break    
                    }
                break;    
                
                case "2":
                    this.parafusoScreen.listParafusos();
                    break;    
                case "3":
                    const deleteScreen = new DeleteScreen(this.router);
                    deleteScreen.getDeleteScreen();
                    break;
                case "4":
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

