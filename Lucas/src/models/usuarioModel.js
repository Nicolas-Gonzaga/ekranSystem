var database = require("../database/config")

/* Mexida-lucas mudei aqui para os nossos dados */
function logar(email, pass) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, pass)
    var instrucao = `
        SELECT * FROM cadastro WHERE email = '${logemail}' AND senha = '${logpass}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


/* Mexida-lucas mudei aqui para os nossos dados cadastro do funcionário*/
function cadastrar(nome, senha, email,fkPerfil, fkEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",nome, senha, email, fkPerfil,fkEmpresa);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO cadastro (nome, senha, email, fkPerfil, fkEmpresa) VALUES ('${nome}', '${senha}', '${email}', '${fkPerfil}','${fkEmpresa}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

/* Mexida-lucas adicionei a função avancar*/
module.exports = {
    logar,
    cadastrar,
};