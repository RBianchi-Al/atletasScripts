const atletasController = require("../models/atletasModels.js");

module.exports = {
	atletasGetAll,
	atletasGetById,
	atletasGravar,
	atletasNovo,
	atletasFiltrar,
	atletasDeletar
}


function atletasGetAll(req, res) {
		atletasController.getAllAtletas(function (err, resultado) {
		console.log(" Listar Atletas {M O D E L}", resultado);
		if (err) {
			throw err;
		} else {
			res.render('atletas/atletas_corpo.ejs', {
				title: 'Listar Atletas',
				obj_atletas: resultado
			});
		}
	})
}

function atletasGetById(req, res) {
	const id = req.params.codigo;
	console.log("Parametro Esperado: " + id);
	atletasController.getByIdAtletas(id, function (err, resultado) {
		console.log("Retorno Atletas { MODEL }\n", resultado);
		if (err) {
			throw err;
		} else {
			res.render('atletas/atletas_edit.ejs', {
				title: 'NodeJs-Atletas',
				obj_atletas: resultado,
                caminho: req.originalUrl
			});
		}
	})
}

function atletasGravar(req, res) {
	console.log("Função Gravar encontrada!!");
	const dados = req.body;
	console.log("Gravando atletas");
	console.log(req.body);
	if (dados.codigo == "") {
		dados.codigo = null;
		console.log("Inserindo registro de atletas {C O N T R O L L E R S }");
		atletasController.inserirAtletas(dados, function (err, resultado) {
			if (err) {
				throw err;
			}
			res.redirect("/atletas/listar");
		})
	} else {
		console.log("Editando registro de atletas");
		atletasController.editarAtletas(dados, function (err, resultado) {
			if (err) {
				throw err;
			}
			res.redirect("/atletas/listar");
		})
	}
}

function atletasNovo(req, res) {
	var dados = [
		{
			codigo: "",
			atl_nome: "",
			atl_apelido: "",
			atl_sexo: "",
			atl_telefone: "",
			aut_email: "",
		}
	]
	res.render('atletas/atletas_edit.ejs', {
		title: 'NodeJs-Atletas',
		obj_atletas: dados,
		caminho: req.originalUrl
	})
}

function atletasFiltrar(req, res) {
	console.log("Entranto na função para filtrar registros de atletas {C O N T R O L L E R S}\n");
	cod_i = req.body.cod_ini;
	cod_f = req.body.cod_fim;
	atv_i = req.body.atv_ini;
	atv_f = req.body.atv_fim;
	sex_i = req.body.sex_ini;
	sex_f = req.body.sex_fim;

	console.log("Dados: \n" + cod_i + " - " + cod_f);

	atletasController.filtrarAtletas(
		cod_i, cod_f,
		atv_i, atv_f,
		sex_i, sex_f,
		function (err, resultado) {
			console.log("Retorno da Consulta:\n "+resultado);
			if (err) {
				throw err
			} else {
				res.render('atletas/atletas_corpo.ejs', {
					title: 'NodeJs-Livros',
					obj_atletas: resultado,
					caminho: req.originalUrl
				});
			}
		}
	)
}



function atletasDeletar(req, res) {
	const id = req.params.codigo;

	console.log("Parametro Esperado: " + id);

	atletasController.deletarAtletas(id, function (err, resultado) {
		console.log("Retorno Atletas { MODEL }\n", resultado);
		if (err) {
			throw err;
		} else {

			res.redirect('/atletas/listar');

		}
	})
}