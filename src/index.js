import { Personagem } from "./modules/personagem.js"
import { Mago } from "./modules/Mago.js"
import { Arqueiro } from "./modules/Arqueiro.js"
import { PersonagemView } from "./components/personagem-view.js"
import { ArqueiroMago } from "./modules/ArqueiroMago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoAntonio = new Mago('Antonio', 4, 'Fogo',4,3)
const magaJulia = new Mago('Julia', 8, 'Gelo',7,10)
const arqueiroRenato = new Arqueiro('Renato',5,10)
const arqueiroMagoJoao = new ArqueiroMago('João',7,7,7,'Gelo',7)
const guerreiraJorge = new Guerreiro('Jorge', 8)

const personagens = [magoAntonio,magaJulia,arqueiroRenato,arqueiroMagoJoao, guerreiraJorge]

new PersonagemView(personagens).render()
console.log( Personagem.verificarVencedor(magaJulia,arqueiroMagoJoao) ) 



