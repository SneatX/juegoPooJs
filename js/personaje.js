export class personaje{
    #vida = 20
    #defensa = 50
    dano = 5
    constructor(){
        this.setNombre = undefined
    }

    set setNombre(nom = "Jhon"){
        this.nombre = nom
    }

    set setVida(puntos){
        this.#vida += puntos
    }

    set setDefensa(puntos){
        this.#defensa += puntos
    }

    get getDefensa(){
        return this.#defensa
    }

    
    set setDano(danoExtra){
        this.dano += danoExtra
    }

    get getDano(){
        return this.dano
    }
    //El metodo atacar llama al metodo reducir vida del atacado
    atacar(atacado, dano){
        atacado.reducirVida(dano)
    }

    reducirVida(puntos){
        let danoHecho = puntos - (this.#defensa/10)
        this.#vida -= danoHecho
    }

}