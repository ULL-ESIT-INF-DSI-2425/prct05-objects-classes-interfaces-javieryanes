import { describe, expect, test} from "vitest";
import { Pokemon, PokemonType, Stats } from "../src/Pokemon";

describe ("pruebas de la clase Pokemon", () => {
    // Creación de los objetos para las pruebas
    const stats1: Stats = { attack: 52, defense: 43, speed: 65, hp: 39 };
    const poke1 = new Pokemon("Charmander", 10, 1.80, PokemonType.Fire, stats1);

    test(`Creación correcta de un objeto Pokemon: Pokemon("Charmander", 10, 1.80, "Fire", { attack: 52, defense: 43, speed: 65, hp: 39 }`, () => {
        expect(poke1).toBeDefined();
        expect(poke1).toBeInstanceOf(Pokemon);
    });
    test(`las estadísticas son correctas y los getters hacen su función: name = Charmander, weight = 10, height = 1.80`, () => {
        expect(poke1.getName()).toBe("Charmander");
        expect(poke1.getHeight()).toBe(1.80);
        expect(poke1.getWeight()).toBe(10);
    });
    test(`se devuelven correctamente el tipo de pokemon, PokemonType = Fire`, () => {
        expect(poke1.getType()).toBe(PokemonType.Fire);
    });
    test(`se devuelven las estadísticas correctamente`, () => {
        expect(poke1.getStats()).toEqual({ attack: 52, defense: 43, speed: 65, hp: 39 });
    });
    test(`el método para mostrar el objeto funciona correctamente`, () => {
        const string_esperada: string = `Name: Charmander, Type: fire, Weight: 10kg, Height: 1.8m, 
Stats: "Attack": 52, "Defense": 43, "Speed": 65, "HP": 39`
        expect(poke1.toString()).toBe(string_esperada);
    });
});
