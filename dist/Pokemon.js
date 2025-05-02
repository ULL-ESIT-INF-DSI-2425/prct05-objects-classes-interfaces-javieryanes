"use strict";
//import { string } from "yaml/dist/schema/common/string";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = exports.PokemonType = void 0;
var PokemonType;
(function (PokemonType) {
    PokemonType["Fire"] = "fire";
    PokemonType["Water"] = "water";
    PokemonType["Grass"] = "grass";
    PokemonType["Electric"] = "electric";
})(PokemonType || (exports.PokemonType = PokemonType = {}));
class Pokemon {
    // Atributos 
    name;
    weight;
    height;
    type;
    stats;
    constructor(name, weight, height, type, stats) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.type = type;
        this.stats = stats;
    }
    // Métodos
    // getters
    getName() { return this.name; }
    getWeight() { return this.weight; }
    getHeight() { return this.height; }
    getType() { return this.type; }
    getStats() { return this.stats; }
    // Método para mostrar la información del Pokémon
    /**
     * Función para transformar el objeto en una string
     * @returns Cadena con todos los atributos del objeto
     */
    toString() {
        return `Name: ${this.getName()}, Type: ${this.getType()}, Weight: ${this.getWeight()}kg, Height: ${this.getHeight()}m, 
Stats: "Attack": ${this.getStats().attack}, "Defense": ${this.getStats().defense}, "Speed": ${this.getStats().speed}, "HP": ${this.getStats().hp}`;
    }
}
exports.Pokemon = Pokemon;
