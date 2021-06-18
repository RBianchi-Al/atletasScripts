const modalidadesController = require("../models/modalidadesModels.js");

module.exports = {
	modalidadesGetAll,
	modalidadesGetById,
	modalidadesGravar,
	modalidadesNovo,
	atletasActiveAi,
	atletasFiltrar,
	atletasActiveAi,
}

// listando os modalidades
function modalidadesGetAll(req, res) {
	console.log("Listar modalidades {MODEL}");
	modalidadesController.getAllModalidades(function (err, resultado) {
		console.log(" Listar Modalidades {M O D E L}", resultado);
		if (err) {
			throw err;
		} else {
			res.render('modalidades/modalidades_corpo.ejs', {
				title: 'NodeJs-Modalidades',
				nomealuno: 'Renata Alexandre Bianci=hi',
				obj_modalidades: resultado
			});
		}
	})
}

function modalidadesGetById(req, res) {
	const id = req.params.codigo;
	console.log("Parametro Esperado: " + id);

	modalidadesController.getByIdModalidades(id, function (err, resultado) {
		console.log("Retorno Modalidades { MODEL }\n", resultado);
		if (err) {
			throw err;
		} else {
			res.render('modalidades/modalidades_edit.ejs', {
				title: 'NodeJs-Modalidades',
				obj_modalidades: resultado,
				caminho: req.originalUrl
			});
		}
	})
}



// bandeira são sinalizadores que mostram se está vindo os resultados mesmo

function modalidadesGravar(req, res) {
	console.log("Função Gravar encontrada!!");
	const dados = req.body;
	console.log("Gravando Modalidades");
	console.log(req.body);
	if (dados.mod_codigo == "") {
		dados.mod_codigo = null;
		console.log("Inserindo registro de modalidades {C O N T R O L L E R S }");
		modalidadesController.inserirModalidades(dados, function (err, resultado) {
			if (err) {
				throw err;
			}
			res.redirect("/modalidades/listar");
		})
	} else {
		console.log("Editando registro de modalidades");
		modalidadesController.editarModalidades(dados, function (err, resultado) {
			if (err) {
				throw err;
			}
			res.redirect("/modalidades/listar");
		})
	}
}

function modalidadesNovo(req, res) {
	var dados = [
		{
			mod_codigo: "",
			mod_descricao: "",
			mod_tipo: "",
			mod_federacao: "",
			mod_coletivo: "",
			codigo: "",
		}
	]
	res.render('modalidades/modalidades_edit.ejs', {
		title: 'NodeJs-Atletas',
		obj_modalidades: dados,
		caminho: req.originalUrl
	})
}

// não deletar vendas para manter um histórico OU deixar o ativo e inativo em um registro

function atletasActiveAi() { }


function atletasFiltrar(req, res) {

	console.log("Entranto na função para filtrar registros de autores {C O N T R O L L E R S}\n");

	cod_i = req.body.cod_ini;
	cod_f = req.body.cod_fim;

	atv_i = req.body.atv_ini;
	atv_f = req.body.atv_fim;

	sex_i = req.body.sex_ini;
	sex_f = req.body.sex_fim;

	console.log("Dados: \n" + cod_i + " - " + cod_f);

	autoresController.filtrarAutores(
			cod_i, cod_f,
			atv_i, atv_f,
			sex_i, sex_f,
			function (err, resultado) {
					console.log("Retorno da Consulta:\n " + resultado);
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

function atletasActiveAi(req, res) {
	var id = req.params.codigo;
	var p_ativo = "";
	console.log("Código Atleta a Ativa/Inativar: ", id);
	atletasController.getByIdAtletas(id, function (err, result) {
			console.log("A/I: ", result[0].aut_ativoinativo);
			p_ativo = result[0].aut_ativoinativo;

			if (err) {
					throw err;
			} else {
					if (p_ativo == "A") {
							p_ativo = "I"
					} else {
							p_ativo = "A";
					}
			}
			console.log("I/A: ", p_ativo);

			atletasController.inativarAtletas(id, p_ativo, function (err, result) {
					if (err) {
							console.log("Erro Verifique!!!");
							throw err;
					}
					console.log("Passou!");

					res.redirect('/atletas/listar');

			});
	})


}
