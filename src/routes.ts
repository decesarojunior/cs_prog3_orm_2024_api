import {Router} from 'express'; //importacao do roteador

import JogadorController from './app/controllers/JogadorController';

const router = Router(); // inicialização

router.get('/listjogador', JogadorController.list);
router.get('/jogador/:nickname', JogadorController.find);


export default router; // exportacao da variável router (assim ele fica disponível para ser importada)