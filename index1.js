// enviar textos
import express from 'express';
const app = express();
app.get('/', (req,res) => {
    res.send('<h1 style = "color: purple; text-align: center">Olá Mundo Express!</h1>')
});

app.get('/contato', (req,res) => {
    res.send('<h1 style = "color: purple; text-align: center">Olá Contato!</h1>')
});

// carregando servidor
app.listen(8080, () => {
    console.log("Servidor Express rodando na porta 8080!")
});
