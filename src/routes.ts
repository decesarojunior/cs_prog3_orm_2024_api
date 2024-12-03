import {Router} from 'express'; //importacao do roteador

import JogadorController from './app/controllers/JogadorController';

const router = Router(); // inicialização

router.get('/listjogador', JogadorController.list);
router.get('/jogador/:nickname', JogadorController.find);
router.post('/loginjogador', JogadorController.login);
router.post('/insertjogador', JogadorController.store);
router.get('/deletejogador/:nickname', JogadorController.delete);
router.post('/updatejogador/', JogadorController.update);


export default router; // exportacao da variável router (assim ele fica disponível para ser importada)