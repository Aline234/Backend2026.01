'use strict';
// Importações
import { liquido } from "./modules/calculaLiquido.js";
import { quadrado, cubo, potenciacao } from "./modules/colecao.js";

let resultado = liquido(5000,10)


// Chamando a função
console.log(`Resultado: ${resultado.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);
console.log(`Quadrado: ${quadrado(8)}`);
console.log(`Cubo: ${cubo(8)}`);
console.log(potenciacao(8, 10));

