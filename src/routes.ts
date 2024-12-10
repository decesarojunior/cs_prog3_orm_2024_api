import {Router} from 'express'; //importacao do roteador

import JogadorController from './app/controllers/JogadorController';
import PatenteController from './app/controllers/PatenteController';
import LocalController from './app/controllers/LocalController';
import ConfiguracaoController from './app/controllers/ConfiguracaoController';
import ParametroController from './app/controllers/ParametroController';

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

router.get('/listlocal', LocalController.list);
router.get('/local/:id', LocalController.find);
router.get('/deletelocal/:id', LocalController.delete);
router.post('/updatelocal/', LocalController.update);
router.post('/insertlocal/', LocalController.store);

router.get('/listlocal', ParametroController.list);
router.get('/local/:id', ParametroController.find);
router.get('/deletelocal/:id', ParametroController.delete);
router.post('/updatelocal/', ParametroController.update);
router.post('/insertlocal/', ParametroController.store);

router.get('/listconfiguracao', ConfiguracaoController.list);
router.get('/configuracao/:id', ConfiguracaoController.find);
router.get('/deleteconfiguracao/:id', ConfiguracaoController.delete);
router.post('/updateconfiguracao/', ConfiguracaoController.update);
router.post('/insertconfiguracao/', ConfiguracaoController.store);

router.get('/listparametro', ParametroController.list);
router.get('/parametro/:codigo', ParametroController.find);
router.get('/deleteparametro/:codigo', ParametroController.delete);
router.post('/updateparametro/', ParametroController.update);
router.post('/insertparametro/', ParametroController.store);

export default router; // exportacao da variável router (assim ele fica disponível para ser importada)