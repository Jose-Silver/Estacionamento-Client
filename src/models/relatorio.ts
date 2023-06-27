import { AbstractEntity } from "./abstract-entity";
import { Condutor } from "./condutor";
import { Veiculo } from "./veiculo";

export class Movimentacao extends AbstractEntity {
    veiculoId! : Veiculo 
    condutorId! : Condutor
    entrada! : Date
    saida! : Date
    horas! : number
    horasDesconto! : number
    valorDesconto! : number
    valorTotal! : number

    constructor(){
        super()
        this.ativo = true
    }
}