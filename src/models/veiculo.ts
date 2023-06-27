import { AbstractEntity } from "./abstract-entity";
import { Modelo } from "./modelo";
import { Cor } from "./cor";
import { Tipo } from "./tipo";


export class Veiculo extends AbstractEntity {
    placa! : string
    modeloId! :Modelo
    cor! : Cor
    tipo! : Tipo
    ano! : number
    

    constructor(){
        super()
        this.ativo = true
    }
}