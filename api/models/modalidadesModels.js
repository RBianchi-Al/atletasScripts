const conexao = require('../../config/conexao.js');

module.exports = {
  getAllModalidades,
  getByIdModalidades,
  editarModalidades,
  inserirModalidades,
  inativarModalidades,
  filtrarModalidades
}

function getAllModalidades(callback) {
  conexao.query('select A.* from modalidades A ', callback);
}


function getByIdModalidades(id, callback) {
  conexao.query("select * from modalidades where mod_codigo = " + id, callback);
}

function editarModalidades(dados, callback) {
  const m_sql = "update modalidades set aut_ativoinativo = '" + dados.aut_ativoinativo +
    "', mod_codigo = '" + dados.mod_codigo +
    "', mod_descricao = '" + dados.mod_descricao +
    "', mod_tipo = '" + dados.mod_tipo +
    "', mod_federacao = '" + dados.mod_federacao +
    "', mod_coletivo = '" + dados.mod_coletivo +
    "', codigo = '" + dados.fk_codigo_idx +
    "' where mod_codigo = '" + dados.codigo + "'";

  conexao.query(m_sql, callback);
}

function inserirModalidades(dados, callback) {
  console.log("Inserindo Modalidade { M O D E L}");
  const m_sql = "insert into modalidades set ? ";

  conexao.query(m_sql, dados, callback)
}

function inserirAtletas(dados, callback) {
  console.log("Inserindo Atletas { M O D E L}");
  const m_sql = "insert into atletas set ? ";

  conexao.query(m_sql, dados, callback)
}

function inativarModalidades(id, ativo, callback) {
  console.log("Atletas Ativando/Inativando ", id + " - " + ativo);
  const msql = "UPDATE atletas SET aut_ativoinativo = '" + ativo + "' WHERE aut_codigo = '" + id + "'";
  conexao.query(msql, function (err, result) {
    conexao.query(msql, callback);
  });
  console.log("Estou Ativando/Desativanto Atletas { M O D E L }");
}

function filtrarModalidades(
  pcod_i, pcod_f,
  patv_i, patv_f,
  psex_i, psex_f, callback) {

  const m_sql = 'select * from atletas where ' +
    'aut_codigo >= ' + pcod_i + ' && ' + 'aut_codigo <= ' + pcod_f + ' && ' +
    'aut_ativoinativo >= \'' + patv_i + '\'' + ' && ' + 'aut_ativoinativo <= \'' + patv_f + '\'' + ' && ' +
    'aut_sexo         >= \'' + psex_i + '\'' + ' && ' + 'aut_sexo         <= \'' + psex_f + '\'';

  console.log(m_sql + "\n");
  conexao.query(m_sql, callback);
}