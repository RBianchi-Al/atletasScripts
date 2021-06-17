var conexao = require('../../config/conexao')

const controllerIndex = require('../controllers/indexControllers.js');

app.get('/', controllerIndex.indexControllers);

app.get('/getMysql', controllerIndex.getVrMysql);
