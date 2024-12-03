import {Router} from 'express'; //importacao do roteador

import JogadorController from './app/controllers/JogadorController';
import PatenteController from './app/controllers/PatenteController';

const router = Router(); // inicialização

router.get('/listjogador', JogadorController.list);
router.get('/jogador/:nickname', JogadorController.find);
router.post('/loginjogador', JogadorController.login);
router.post('/insertjogador', JogadorController.store);
router.get('/deletejogador/:nickname', JogadorController.delete);
router.post('/updatejogador/', JogadorController.update);

router.get('/listpatente', PatenteController.list);
router.get('/patente/:id', PatenteController.find);
router.get('/deletepatente/:id', PatenteController.delete);
router.post('/updatepatente/', PatenteController.update);
router.post('/insertpatente/', PatenteController.store);


export default router; // exportacao da variável router (assim ele fica disponível para ser importada)