import { personaje } from "./personaje.js"

export class guerrero extends personaje{
    #armadura = true
    #arma = true
    constructor(nombre){
        super()
        this.setNombre = nombre
        this.setVida = 15
        this.setDano = 5
        this.equipamiento()
    }
    equipamiento(){
        if(this.#armadura) this.setDefensa = 100 
        if(this.#arma) this.setDano = 10
    }
}