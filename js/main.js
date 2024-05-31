import { personaje } from "./personaje.js"
import { guerrero } from "./guerrero.js"
import { mago } from "./mago.js"

//let personajeDefault = new personaje()
let guerrero1 = new guerrero("Manuel")
let mago1 = new mago("Manuel")


console.log(guerrero1)
console.log(mago1)

console.log("\nMago ataca guerrero")
mago1.atacar(guerrero1, mago1.getDano)

console.log(guerrero1)

console.log("\nGuerreo ataca mago")
guerrero1.atacar(mago1, guerrero1.getDano)

console.log(mago1)