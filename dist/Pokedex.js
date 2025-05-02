"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokedex = void 0;
class Pokedex {
    pokemons = [];
    // Métodos
    getPokemons() { return this.pokemons; }
    ;
    length() { return this.pokemons.length; }
    // añadir un pokemon
    addPokemon(poke1) {
        this.pokemons.push(poke1);
    }
    searchByHeight(min, max) {
        let lista = [];
        for (let i = 0; i < this.length(); ++i) {
            if (this.pokemons[i].getHeight() > min && this.pokemons[i].getHeight() < max)
                lista.push(this.pokemons[i]);
        }
        return lista;
    }
}
exports.Pokedex = Pokedex;
