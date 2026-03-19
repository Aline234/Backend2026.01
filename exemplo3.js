// ferramenta embarcada - vem junto com o node

import http from 'http'

// req - requisição
// res - response = resposta
http.createServer((req,res)=> {
    // vai aparecer no browser
    res.end("Voce esta conectado!!")
}).listen(8080)

// quando executamos no prompt de comando o cursor ficará piscando - para exergamos a mensagem: 
// vamos para o browser e digitamos //localhost:8080, neste momenri veremos a mensagem conectado!!!
// para interromper o servidor: ctrl + c no cmd/terminal (prompt de comando)
// HTTP (HyperText Transfer Protocol)
