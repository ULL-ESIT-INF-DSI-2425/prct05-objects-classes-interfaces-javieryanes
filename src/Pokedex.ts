import { Pokemon, PokemonType, Stats } from "./Pokemon"

export class Pokedex {

    private pokemons: Pokemon[] = [];

    // Métodos
    getPokemons(): Pokemon[] { return this.pokemons }
    length(): number { return this.pokemons.length }

    // añadir un pokemon

    /**
     * Añadir un pokemon al conjunto
     * @param poke1 - Pokemon que se añade
     */
    addPokemon(poke1: Pokemon): void {
        this.pokemons.push(poke1);
    }

    /**
     * Buscar pokemons por altura
     * @param min - Estatura mínima que puede tener
     * @param max - Estatura máxima que puede tener
     * @returns Un vector de objetos Pokemon que se ajustan a los parametros
     */
    searchByHeight(min: number, max: number): Pokemon[] {
       let lista: Pokemon[] = [];
       for ( let i = 0; i < this.length(); ++i) {
          if (this.pokemons[i].getHeight() > min && this.pokemons[i].getHeight() < max) lista.push(this.pokemons[i]);
       }

       return lista;
    }

    
}