const indexController = require('../models/indexModels.js');

module.exports = {
    indexControllers,
     getVrMysql,

}

function indexControllers(req, res){
    res.render('inicio/corpo_index.ejs', {
        title: 'NodeJs-Livros',
        titulo: 'Projeto CRUD - Nodejs - Express - Mysql - JavaScript',
        subtitulo:'Programação Script - WEB - 5º Semestre',
        livros:'Atletas',
        mensagem:'Renata Alexandre Bianchi'
    });
};


function getVrMysql(req, res){
    console.log("Dentro do Controller\n {GET  Versão Mysql}");
    indexController.versaoMysql(function(err,resultado){
        if(err){
            console.log('Erro Acessando Mysql', err);
            throw err;
        }else{
            console.log("Versao Obtida: ", resultado);
            res.send(resultado);
        }
    })
}


