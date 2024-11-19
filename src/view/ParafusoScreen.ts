import PromptSync from "prompt-sync";
import Router from "../control/Router";
import Parafuso from "../model/Parafuso";

export default class ParafusoScreen {
    private prompt = PromptSync();
    private router!: Router;

    constructor(router: Router) {
        this.router = router;
    }

    public registerParafuso(): void {
        let parafuso: Parafuso = this.router.parafusoController.getNewParafuso();
        let parafusoEspessura = this.prompt("Digite a espessura do Parafuso: ");
        parafuso.setEspessura(parafusoEspessura);

        let parafusoComprimento = this.prompt("Digite o comprimento do Parafuso: ")
        parafuso.setComprimento(parafusoComprimento);
    
        this.router.parafusoController.registerNewParafuso(parafuso);
    
    }

    public listParafusos(): void {
        const parafusos: Parafuso[] = this.router.getDatabase().getAllParafusos();

        if (parafusos.length === 0) {
            console.log("Nenhum Parafuso cadastrado.");
        } else {
            console.log("Lista de Parafusos Cadastrados:");
            parafusos.forEach((parafuso, index) => {
                console.log(`\n Parafuso ${index + 1}`)
                console.log(`Espessura: ${parafuso.getEspessura()}`)
                console.log(`Comprimento: ${parafuso.getComprimento()}`)
            })
        }


    }


}