import { Pokemon, PokemonType, Stats } from "./Pokemon"
import { Pokedex } from "./Pokedex"

/**
 * Construir todos los pokemons
 */
const charmander = new Pokemon ( "Charmander", 45, 1.87, PokemonType.Fire, { attack: 52, defense: 43, speed: 65, hp: 39 });
const pikachu = new Pokemon ( "pikachu", 20, 1.05, PokemonType.Electric, { attack: 100, defense: 10, speed: 77, hp: 99 });
const onix = new Pokemon ( "onix", 110, 2.50, PokemonType.Grass, { attack: 150, defense: 160, speed: 23, hp: 600 });

/**
 * Añadir pokemons al objeto pokedex
 */
const pokedex = new Pokedex;
pokedex.addPokemon(charmander);
pokedex.addPokemon(pikachu);
pokedex.addPokemon(onix);

const alturas1: Pokemon [] = pokedex.searchByHeight(1,2);
const alturas2: Pokemon [] = pokedex.searchByHeight(2,3);

// mostrar los pokemon por alturas
/**
 * Mostrar todos los Pokemon con estatura entre 1 y 2
 */
console.log("Alturas entre 1 y 2m");
for (let i = 0; i < alturas1.length; ++i) console.log(alturas1[i].toString());


console.log("Alturas entre 2 y 3m");
for (let i = 0; i < alturas2.length; ++i) console.log(alturas2[i].toString());
//console.log(charmander.toString());