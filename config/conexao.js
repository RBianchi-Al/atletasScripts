var mysql = require('mysql');
var database = 'dados20192d';

// instanciar objeto de acesso ao banco de dados
var conexao = mysql.createConnection({
    user: 'root',
    password: '123456',
    host: 'localhost',
    port: 3306
});

conexao.connect((err) => {
    if (err) {
        console.log('Erro ao conectar no mysql...', err)
        return
    }
    console.log('\nConexão estabilizada com sucesso!!!')
})

conexao.query('USE ' + database);
console.log('\nBanco de dados '+ database.toUpperCase())

module.exports = conexao;