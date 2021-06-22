const controllerModalidades = require('../controllers/modalidadesControllers.js');

app.get('/modalidades/listar', controllerModalidades.modalidadesGetAll);

app.get('/modalidades/editar/:codigo', controllerModalidades.modalidadesGetById);

app.post('/modalidades/gravar', controllerModalidades.modalidadesGravar);

app.get('/modalidades/novo', controllerModalidades.modalidadesNovo);

app.get('/modalidades/excluir/:codigo', controllerModalidades.modalidadesDeletar);
