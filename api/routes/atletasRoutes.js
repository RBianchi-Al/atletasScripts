const controllerAtletas = require('../controllers/atletasControllers.js');

app.get('/atletas/listar', controllerAtletas.atletasGetAll);
app.get('/atletas/editar/:codigo', controllerAtletas.atletasGetById);
app.post('/atletas/gravar', controllerAtletas.atletasGravar);
app.get('/atletas/novo', controllerAtletas.atletasNovo);
app.post('/atletas/filtrar', controllerAtletas.atletasFiltrar);
app.get('/atletas/excluir/:codigo', controllerAtletas.atletasDeletar);