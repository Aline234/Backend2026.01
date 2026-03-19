'use strict';

import { liquido } from "./modules/calculaLiquido.js";
import { quadrado } from "./modules/calcquadrado.js";
import { cubo } from "./modules/calcquadrado.js";

// Chamando a função

let resultado = liquido(5000,10)
console.log(`Resultado: ${resultado.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);
let numeroQuadrado = quadrado(2);
let numeroCubo = cubo(2);
console.log(numeroQuadrado);
console.log(numeroCubo);
