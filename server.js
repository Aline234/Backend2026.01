'use strict';

import express from "express";

const app = express();

// permite receber dados no formulário (HTML)
app.use(express.urlencoded({extended: true}));
// Traduzindo: express.urlencoded --> Traduz os dados do Formulário
// Extended: true --> permite o uso de dados mais complexos, se utilizarmos extended: false, irá aceitar somente strings (Obj, arrays, ..etc)
// app.use --> ativa todos os parâmetros no servidor

// Principais Métodos do CRUD
// C -> CREAT - app.post() --> Enviar Dados
// R -> READ - app.get() --> Buscar Dados
// U -> UPDATE - app.put() --> Atualizar Dados
// D -> DELETE - app.delete() --> Excluir Dados

// Qual rota para receber os dados? 
app.post("/dados", (req,res) => {
    // varaveis constantes locais
    const nome = req.body.nome;
    const idade = req.body.idade;

    console.log("Dados recebidos!");
    console.log("Nome: " + nome);
    console.log("idade: ", idade);
    res.send(`Dados recebidos: ${nome}, ${idade}`);
    
});

// Servidor
app.listen(8080, () => {
    console.log("Servidor Rodando em http://localhost:8080");
});