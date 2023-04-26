import { LightningElement } from 'lwc';

export default class Estrutura extends LightningElement {

pokemons = [
{cod:1, nome:"Pikachu" ,    tipo:"Raio" ,                nivel:"52" ,   ataque: "40"  , defesa: "30", vida: "30"},
{cod:2, nome:"Charmander" , tipo:"Fogo" ,                nivel:"35" ,   ataque: "40"  , defesa: "30", vida: "30"},
{cod:3, nome:"Chikorita" ,  tipo:"Planta" ,              nivel:"21" ,   ataque: "30"  , defesa: "40", vida: "30"},
{cod:4, nome:"Mew" ,        tipo:"Psiquico" ,            nivel:"11" ,   ataque: "60"  , defesa: "60", vida: "60"},
{cod:5, nome:"Charizard" ,  tipo:"Planta" ,              nivel:"999",   ataque: "50"  , defesa: "50", vida: "50" },
{cod:6, nome:"Tauros" ,     tipo:"Normal" ,              nivel:"1"  ,   ataque: "60"  , defesa: "60", vida: "50"},
{cod:7, nome:"Amaura" ,     tipo:"Gelo" ,                nivel:"8"  ,   ataque: "40"  , defesa: "30", vida: "50"},
];
}

//Criar um loop para acessar uma estrutura de dados plural
//For