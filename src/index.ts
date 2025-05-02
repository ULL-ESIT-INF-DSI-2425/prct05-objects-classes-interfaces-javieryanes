import { Pokemon, PokemonType, Stats } from "./Pokemon"

const charmander = new Pokemon (
    "Charmander",
    45,
    1.87,
    PokemonType.Fire,
    { attack: 52, defense: 43, speed: 65, hp: 39 }

);

console.log(charmander.toString());