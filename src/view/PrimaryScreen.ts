import promptSync from "prompt-sync"
import Router from "../control/Router";
import ParafusoScreen from "./ParafusoScreen";

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
            let choice = this.prompt("Escolha\n1 - Cadastro\n2 - Listar\n3 - Apagar\n5 - Sair\n")
            switch (choice) {
                case "1":
                    this.parafusoScreen.registerParafuso();
                    break;    
                
                case "2":
                    this.parafusoScreen.listParafusos();
                    break;    
                default:
                    console.log("Opção inválida");
                    break;
            }
            
        
        
        
        }
    }





}

