var database = require("../database/config")

/* Mexida-lucas mudei aqui para os nossos dados */
function logar(logemail, logpass) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", logemail, logpass)
    var instrucao = `
        SELECT * FROM cadastro WHERE email = '${logemail}' AND senha = '${logpass}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


/* Mexida3-Michelly mudei aqui para os nossos dados cadastro do funcionário*/
function cadastrar(lognome, logsenha, logemail, logempresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",cnpj, email, senha, tel, tipofunc);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (fkempresa, email, senha, tel, tipofunc) VALUES ('${cnpj}', '${email}', '${senha}', '${tel}','${tipofunc}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

/* Mexida4-Michelly adicionei a função avancar*/
module.exports = {
    entrar,
    cadastrar,
    avancar,
    listar,
};