//import { string } from "yaml/dist/schema/common/string";

export enum PokemonType {
    Fire = 'fire',
    Water = 'water',
    Grass = 'grass',
    Electric = 'electric'
  }

export interface Stats {
    attack: number;
    defense: number;
    speed: number;
    hp: number;
  }

export class Pokemon {
  // Atributos 
  private name: string;
  private weight: number;
  private height: number;
  private type: PokemonType;
  private stats: Stats;
  
  constructor(name: string, weight: number, height: number, type: PokemonType, stats: Stats) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.type = type;
    this.stats = stats;
  }

    // Métodos
    // getters
    getName(): string { return this.name;}
    getWeight(): number { return this.weight;}
    getHeight(): number { return this.height;}
    getType(): PokemonType { return this.type;}
    getStats(): Stats { return this.stats;}

    // Método para mostrar la información del Pokémon
    toString(): string {
      return `Name: ${this.getName()}, Type: ${this.getType()}, Weight: ${this.getWeight()}kg, Height: ${this.getHeight()}m, 
Stats: "Attack": ${this.getStats().attack}, "Defense": ${this.getStats().defense}, "Speed": ${this.getStats().speed}, "HP": ${this.getStats().hp}`;
    }
}