"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pokemon_1 = require("./Pokemon");
const charmander = new Pokemon_1.Pokemon("Charmander", 45, 1.87, Pokemon_1.PokemonType.Fire, { attack: 52, defense: 43, speed: 65, hp: 39 });
console.log(charmander.toString());
