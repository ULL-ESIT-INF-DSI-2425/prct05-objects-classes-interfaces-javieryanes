import { describe, it, expect, beforeEach } from 'vitest';
import { Pokedex } from '../src/Pokedex';
import { Pokemon, PokemonType, Stats } from '../src/Pokemon';

describe('Pokedex', () => {
  let pokedex: Pokedex;

  beforeEach(() => {
    pokedex = new Pokedex();
    const bulbasaur = new Pokemon( 'Bulbasaur', 6.8, 1, PokemonType.Grass, { attack: 49,  defense: 49,  speed: 45,  hp: 100});
    const charmander = new Pokemon( 'Charmander', 8.5, 2, PokemonType.Fire, {   attack: 52,   defense: 43,   speed: 65,   hp: 100 });

    pokedex.addPokemon(bulbasaur);
    pokedex.addPokemon(charmander);
  });

  it('should return Pokémon within height range', () => {
    const results = pokedex.searchByHeight(0.5, 2.7);
    expect(results.length).toBe(2);
    expect(results.map(p => p.getName())).toContain('Bulbasaur');
    expect(results.map(p => p.getName())).toContain('Charmander');

  });

  it('should return empty array if no Pokémon match height', () => {
    const results = pokedex.searchByHeight(1.0, 2.0);
    expect(results).toEqual([]);
  });

  it('should exclude Pokémon outside the height range', () => {
    const results = pokedex.searchByHeight(0.69, 1.7);
    expect(results.length).toBe(1);
    expect(results[0].getName()).toBe('Bulbasaur');
  });
});
