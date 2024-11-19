import promptSync from "prompt-sync"
import Router from "../control/Router";

export default class PrimaryScreen {
    private prompt = promptSync();
    private router!: Router;
    
    constructor(router: Router){
        this.router = router;
    }

    public getFirstScreen(): void {
        let showScreen: boolean = true;

        while (showScreen) {
            let choice = this.prompt("Escolha\n1 - Cadastro\n2 - Listar\n3 - Apagar\n5 - Sair\n")
        switch (choice) {
            case "1":
            
        }
        
        
        
        
        }
    }





}

