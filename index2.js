// Enviar paginas HTML
import express from 'express';
import path from 'path';

const app = express();
app.get('/', (req,res) => {
    // res.send --> usado para enviar texto
    res.sendFile(path.resolve('./src/index.html')) 
    // path.resolve --> transforma endereços relativos em endereços absolutos
    // Endereço relativo: ./src/index.html
    // Endereço Absoluto: C:\Users\2025115778\Desktop\backend2026\Backend2026.01\src\index.html
});

app.get('/contato', (req,res) => {
    res.sendFile(path.resolve('./src/contato.html'))
});

app.get('/servico', (req, res) => {
    res.sendFile(path.resolve('./src/servico.html'))
});

app.get('/404', (req, res) => {
    res.sendFile(path.resolve('./src/404.html'))
});


app.listen(8080, () => {
    console.log('Servidor Express rodando na porta 8080!')
});
