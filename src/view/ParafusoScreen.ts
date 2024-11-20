import PromptSync from "prompt-sync";
import Router from "../control/Router";
import Parafuso from "../model/Parafuso";
import ParafusoMaquina from "../model/ParafusoMaquina";
import ParafusoSoberbo from "../model/ParafusoSoberbo";

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

    public registerParafusoMaquina(): void {
        let parafusoMaquina: ParafusoMaquina = this.router.parafusoController.getNewParafusoMaquina();
        
        let parafusoEspessura = this.prompt("Digite a espessura do Parafuso Máquina: ");
        parafusoMaquina.setEspessura(parafusoEspessura);

        let parafusoComprimento = this.prompt("Digite o comprimento do Parafuso Máquina: ");
        parafusoMaquina.setComprimento(parafusoComprimento);

        let parafusoMaquinaRosca = this.prompt("Digite a rosca do Parafuso (ex: Rosca grossa ou fina): ");
        parafusoMaquina.setRosca(parafusoMaquinaRosca);
        
        this.router.parafusoController.registerNewParafuso(parafusoMaquina);
    }

    public regiterParafusoSoberbo(): void {
        let parafusoSoberbo: ParafusoSoberbo = this.router.parafusoController.getNewParafusoSoberbo();
        
        let parafusoEspessura = this.prompt("Digite a espessura do Parafuso Soberbo: ");
        parafusoSoberbo.setEspessura(parafusoEspessura);

        let parafusoComprimento = this.prompt("Digite o comprimento do Parafuso Soberbo: ");
        parafusoSoberbo.setComprimento(parafusoComprimento);

        let parafusoSoberboBucha = this.prompt("Digite a medida da bucha do Parafuso: ");
        parafusoSoberbo.setBucha(parafusoSoberboBucha);
        
        this.router.parafusoController.registerNewParafuso(parafusoSoberbo);
    }


    public listParafusos(): void {
        const parafusos: Parafuso[] = this.router.getDatabase().getAllParafusos();

        if (parafusos.length === 0) {
            console.log("Nenhum Parafuso cadastrado.");
        } else {
            console.log("Lista de Parafusos Cadastrados:");
            parafusos.forEach((parafuso, index) => {
                console.log(`\n Parafuso ${index + 1}`)
                console.log(`Tipo: ${parafuso.constructor.name}`)
                console.log(`Espessura: ${parafuso.getEspessura()}`)
                console.log(`Comprimento: ${parafuso.getComprimento()}`)
            
                if(parafuso instanceof ParafusoMaquina) {
                    console.log(`Rosca: ${parafuso.getRosca()}`)
                } else if (parafuso instanceof ParafusoSoberbo) {
                    console.log(`Bucha: ${parafuso.getBucha()}`);
                }
                console.log("")
            })
        }


    }


}