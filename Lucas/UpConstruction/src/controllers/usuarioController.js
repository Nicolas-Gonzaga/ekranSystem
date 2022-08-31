var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function logar(req, res) {
    var logemail = req.body.logemailServer;
    var logpass = req.body.logpassServer;
    let logpermissoes = logpermissoes.value

    if (logemail == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (logpass == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else if (logpermissoes == undefined || logpermissoes == "0") {
        res.status(400).send("Sua permissão está indefinida!");
    } else {

        usuarioModel.logar(logemail, logpas, logpermissoes)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


function cadastrarUnidade(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var loglocal = req.body.loglocalServer;
    var logidempresa = req.body.logidempresaServer;

    // Faça as validações dos valores

    if (loglocal == undefined) {
        res.status(400).send("Informe o local correto");
    } else if (logidempresa == undefined) {
        res.status(400).send("Informe o id da empresa correto");
    }
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js

    usuarioModel.cadastrarUnidade(loglocal, logidempresa)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

//Arrumar essa parte inteira
function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var logname = req.body.lognameServer;
    var logemail = req.body.logemailServer;
    var logsenha = req.body.logsenhaServer;
    var logempresa = req.body.logempresaServer;
    var logpermissoes = req.body.logpermissoesServer;

    // Faça as validações dos valores

    if (logname == undefined) {
        res.status(400).send("Informe algum nome");
    } else if (logemail == undefined) {
        res.status(400).send("Informe o id da empresa correto");
    } else if (logsenha == undefined) {
        res.status(400).send("Informe alguma senha");
    } else if (logempresa == undefined) {
        res.status(400).send("Informe o id da empresa correto");
    } 
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js

    usuarioModel.cadastrar(logname, logemail, logsenha, logempresa, logpermissoes)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrarEmpresa(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var lognameE = req.body.lognameEServer;
    var logcnpj = req.body.logcnpjServer;
 

    // Faça as validações dos valores

    if (lognameE == undefined) {
        res.status(400).send("Informe algum nome");
    } else if (logcnpj == undefined) {
        res.status(400).send("Informe o id da empresa correto");
    } 
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js

    usuarioModel.cadastrarEmpresa(lognameE, logcnpj)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    logar,
    cadastrarUnidade,
    cadastrar,
    listar,
    testar,
    cadastrarEmpresa,
}