import { describe, expect, test} from "vitest";
import { resta } from "../src/funciones";

describe ("pruebas de la funcion resta", () => {
    test("resta(1,7) devuelve -6", () => {
        expect(resta(1,7)).toBe(-6);
    });
});
