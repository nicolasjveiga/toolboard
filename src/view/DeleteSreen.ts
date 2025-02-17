import PromptSync from "prompt-sync";
import Router from "../control/Router";
import { Parafuso } from "../model/Parafuso";

export default class DeleteScreen {
    private prompt = PromptSync();
    private router: Router;

    constructor(router : Router) {
        this.router = router;
    }

    public getDeleteScreen(): void {
        const parafusos: Parafuso[] = this.router.getDatabase().getAll();
        if (parafusos.length === 0) {
            console.log("Nenhum parafuso cadastrado para apagar.");
            return;
        }
        
        console.log("Selecione o índice do parafuso a ser apagado");
        parafusos.forEach((parafuso, index) =>{
            console.log(`${index}: ${parafuso.constructor.name} - ${parafuso.getDescricao()}`);
        }) 
        
        const input = this.prompt("Digite o índice: ");
        const indexToDelete = parseInt(input);

        if (isNaN(indexToDelete) || indexToDelete < 0 || indexToDelete >= parafusos.length) {
            console.log("Índice Inválido");
            return;
        }
        
        this.router.getDatabase().removeAt(indexToDelete);
        }

    
}