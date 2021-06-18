const controllerModalidades = require('../controllers/modalidadesControllers.js');

app.get('/modalidades/listar', controllerModalidades.modalidadesGetAll);

app.get('/modalidades/editar/:codigo', controllerModalidades.modalidadesGetById);

app.post('/modalidades/gravar', controllerModalidades.modalidadesGravar);

app.get('/modalidades/novo', controllerModalidades.modalidadesNovo);

// quando faz uma  venda é importante não deletar, interessante colocar A ou I para guardar essa informação. Não teremos rotina de deletar
// app.get('/atletas/ativoInativo/:codigo', controllerModalidades.atletasActiveAi);


// app.post('/atletas/filtrar', controllerAtletas.atletasFiltrar);
