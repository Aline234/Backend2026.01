'use strict';

// Desconto progressivo

const nomeProduto = 'Monitor Gamer';
let precoBase = 1200;
let precoFinal;
let desconto;

console.log(`Produto: ${nomeProduto}`);
// console.log(`Preço original: ${precoBase}`); // sem formatação
// console.log(`Preço original: ${precoBase.toFixed(2)}`); // sem cada de milhar
console.log(`Preço original: ${precoBase.toLocaleString
    ('pt-br', { style: 'currency', currency: 'BRL' })}`); // Formatação do BRASIL

if (precoBase >= 1000) {
    desconto = "5 %";
    precoFinal = precoBase * 0.95;// ou precoFinal = precoBase - precoBase *5/100
}
else if (precoBase >= 800) {
    desconto = "2 %";
    precoFinal = precoBase * 0.98;
} else {
    desconto = '0 %'
    precoFinal = precoBase;
}

// Mostrando Valores
console.log(`O desconto aplicado é: ${desconto}`);
console.log(`O preço Final é ${precoFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);

