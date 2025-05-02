"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pokemon_1 = require("./Pokemon");
const Pokedex_1 = require("./Pokedex");
const charmander = new Pokemon_1.Pokemon("Charmander", 45, 1.87, Pokemon_1.PokemonType.Fire, { attack: 52, defense: 43, speed: 65, hp: 39 });
const pikachu = new Pokemon_1.Pokemon("pikachu", 20, 1.05, Pokemon_1.PokemonType.Electric, { attack: 100, defense: 10, speed: 77, hp: 99 });
const onix = new Pokemon_1.Pokemon("onix", 110, 2.50, Pokemon_1.PokemonType.Grass, { attack: 150, defense: 160, speed: 23, hp: 600 });
const pokedex = new Pokedex_1.Pokedex;
pokedex.addPokemon(charmander);
pokedex.addPokemon(pikachu);
pokedex.addPokemon(onix);
const alturas1 = pokedex.searchByHeight(1, 2);
const alturas2 = pokedex.searchByHeight(2, 3);
// mostrar los pokemon por alturas
console.log("Alturas entre 1 y 2m");
for (let i = 0; i < alturas1.length; ++i)
    console.log(alturas1[i].toString());
console.log("Alturas entre 2 y 3m");
for (let i = 0; i < alturas2.length; ++i)
    console.log(alturas2[i].toString());
//console.log(charmander.toString());
