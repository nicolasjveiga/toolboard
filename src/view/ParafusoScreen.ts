import PromptSync from "prompt-sync";
import Router from "../control/Router";
import { Parafuso } from "../model/Parafuso";
import ParafusoMaquina from "../model/ParafusoMaquina";
import ParafusoSoberbo from "../model/ParafusoSoberbo";
import Resistencia from "../model/Resistencia";

export default class ParafusoScreen {
    private prompt = PromptSync();
    private router!: Router;

    constructor(router: Router) {
        this.router = router;
    }

    public registerParafusoMaquina(): void {
        let parafusoMaquina: ParafusoMaquina = this.router.parafusoController.getNewParafusoMaquina();
        
        let parafusoEspessura = this.prompt("Digite a espessura do Parafuso Máquina: ");
        parafusoMaquina.setEspessura(parafusoEspessura);

        let parafusoComprimento = this.prompt("Digite o comprimento do Parafuso Máquina: ");
        parafusoMaquina.setComprimento(parafusoComprimento);

        let parafusoMaquinaRosca = this.prompt("Digite a rosca do Parafuso (ex: MA ou MB): ");
        parafusoMaquina.setRosca(parafusoMaquinaRosca);
        
        let parafusoMaquinaResistencia = this.prompt("Digite a Resistência do parafuso(ex:5.8 ou 8.8):");
        parafusoMaquina.setClasseResistencia(parafusoMaquinaResistencia);

        this.router.parafusoController.registerParafusoMaquina(parafusoMaquina);
    }

    public registerParafusoSoberbo(): void {
        let parafusoSoberbo: ParafusoSoberbo = this.router.parafusoController.getNewParafusoSoberbo();
        
        let parafusoEspessura = this.prompt("Digite a espessura do Parafuso Soberbo: ");
        parafusoSoberbo.setEspessura(parafusoEspessura);

        let parafusoComprimento = this.prompt("Digite o comprimento do Parafuso Soberbo: ");
        parafusoSoberbo.setComprimento(parafusoComprimento);

        let parafusoSoberboBucha = this.prompt("Digite a medida da bucha do Parafuso: ");
        parafusoSoberbo.setBucha(parafusoSoberboBucha);
        
        let parafusoSoberboResistencia = this.prompt("Digite a Resistência do parafuso(ex: 5.8 ou 8.8):");
        parafusoSoberbo.setClasseResistencia(parafusoSoberboResistencia);

        this.router.parafusoController.registerParafusoSoberbo(parafusoSoberbo);
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
                console.log(parafuso.getDescricao());
                console.log(`Resistência: ${parafuso.getClasseResistencia()} `)
            })
        }


    }


}