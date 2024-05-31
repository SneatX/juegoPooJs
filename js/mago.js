import { personaje } from "./personaje.js"

export class mago extends personaje{
    #armadura = true
    #arma = true
    constructor(nombre){
        super()
        this.setNombre = nombre
        this.setVida = 10
        this.setDano = 10
        this.equipamiento()
    }
    equipamiento(){
        if(this.#armadura) this.setDefensa = 50
        if(this.#arma) this.setDano = 10
    }

}