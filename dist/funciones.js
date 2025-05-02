"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suma = suma;
exports.resta = resta;
/**
 *
 * @param a - Primer parametro de la suma
 * @param b - Segundo parámetro
 * @returns Resultado que se devuelve
 */
function suma(a, b) {
    return a + b;
}
/**
 * Funcion que resta el numero b al a
 * @param a - primer numero
 * @param b - segundo numero
 * @returns Devuelve a - b
 * ```typescript
 * resta(1,7) = -6
 * resta(15,3) = 12
 * ```
 */
function resta(a, b) {
    return a - b;
}
