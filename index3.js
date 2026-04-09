import express from "express";
// import path from "path" não precisamos dele pois n enviaremos arquivos

// Enviar dados para navegador

const app = express();
// dados em formato json = "chave": "valor"

const listStudents = [
    {id: 1, nome: "Maria Augusta", curso: "Lógica de Programação"},
    {id: 2, nome: "Arlindo Jõao", curso: "Matemática Computacional"},
    {id: 3, nome: "Taís dos Santos", curso: "Estatística"},
];

// res-json --> Método especializado que garante que o navegador entenda listStudents como um DADO estruturado e não como um texto>

//rotas
app.get("/api/students", (req, res) => {
    res.json(listStudents) // dados vão xhegar em formato json
});

// servidor

app.listen(8080, () => {
    console.log("Servidor Express na porta 8080 e enviando dados no formato json para o servidor!")
});