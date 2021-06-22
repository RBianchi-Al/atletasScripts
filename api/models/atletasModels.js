const conexao = require('../../config/conexao.js');

module.exports = {
  getAllAtletas,
  getByIdAtletas,
  editarAtletas,
  inserirAtletas,
  filtrarAtletas,
  deletarAtletas
}

function getAllAtletas(callback) {
  conexao.query('select A.* from atletas A', callback);
}

function getByIdAtletas(id, callback) {
  conexao.query("select * from atletas where codigo = " + id, callback);
}

function editarAtletas(dados, callback) {
  const m_sql = "update atletas set atl_nome = '" + dados.atl_nome +
    "', atl_apelido = '" + dados.atl_apelido +
    "', atl_sexo = '" + dados.atl_sexo +
    "', atl_cpf = '" + dados.atl_cpf +
    "', aut_telefone = '" + dados.aut_telefone +
    
    "' where codigo = '" + dados.codigo + "'";

  conexao.query(m_sql, callback);
}

function inserirAtletas(dados, callback) {
  console.log("Inserindo Atletas { M O D E L}");
  const m_sql = "insert into atletas set ? ";

  conexao.query(m_sql, dados, callback)
}



function filtrarAtletas(
  pcod_i, pcod_f,
  psex_i, psex_f, callback) {

  const m_sql = 'select * from atletas where ' +
    'codigo >= ' + pcod_i + ' && ' + 'codigo <= ' + pcod_f + ' && ' +
    'atl_sexo         >= \'' + psex_i + '\'' + ' && ' + 'atl_sexo         <= \'' + psex_f + '\'';

  console.log(m_sql + "\n");
  conexao.query(m_sql, callback);
}

function deletarAtletas(id, callback){
    conexao.query("delete from atletas where codigo = " + id, callback);
}