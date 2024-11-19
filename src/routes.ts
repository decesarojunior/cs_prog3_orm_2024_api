import {Router} from 'express'; //importacao do roteador

import JogadorController from './app/controllers/JogadorController';

const router = Router(); // inicialização

router.get('/jogadores', JogadorController.store);

export default router; // exportacao da variável router (assim ele fica disponível para ser importada)