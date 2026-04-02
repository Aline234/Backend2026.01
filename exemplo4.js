// Ferramentas embarvadas/nativas do node

import http from 'http';
import fs from 'fs'; //file system

// Sistema de Rotas
let server = http.createServer((req,res) => {
    let rotaFinal;
    let rota = req.url; // url digitada pelo usuario
    //tratando url digitada
    rota === '/' ? rotaFinal = "/index.html" : rotaFinal = `${rota}.html`
    // if(rota === "/") rotaFinal = "/index.html"
    // else rotaFinal = `${rota}.html`
    fs.readFile(`./src${rotaFinal}`, (err,data) => {
        if (err) {
            fs.readFile('./src/404.html', (err404, data404) => {
                if (err404) {
                    res.writeHead(404, {'content-type': 'text/html; charset = utf-8'}) 
                    res.end('<h1>Página não encontrada</h1>');
                }
                else res.end(data404)
            })
            return
        }
        // caso tenha dado tudo certo
        res.writeHead(200,{'content-type':'text/html;charset=utf-8'})  
        res.end(data)
    })
});
//carregar o servidor.
server.listen(8080,()=>{
    console.log("Servidor com o módulo FS rodando na porta 8080!")
})
