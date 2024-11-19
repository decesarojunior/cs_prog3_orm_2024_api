import express from 'express';
import routes from './routes';
import './database/connect'

import 'reflect-metadata';


const app = express(); //inicializa a constante app com o express
app.use(express.json());//define o formato das mensagens

app.use(routes); // defini o roteador para as requisições.

//liberação para aceitar requisições de qualquer originem, com qualquer conteúdo e via os métodos get e post
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    next();
});

//inicializa o serviço na porta 3000
app.listen(3000, () => console.log('Server started at http://localhost:3000'));