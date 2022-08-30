var database = require("../database/config");

function buscarUltimasMedidas(idMaquina, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        CPUM, 
        RAM, 
        DISC,
        TEMP,
        horario,
        CONVERT(varchar, horario, 108) as momento_grafico
    from Leitura  
    order by idLeitura desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        CPUM, 
        RAM, 
        DISC,
        TEMP,
        horario,
        date_format(momento, '%H:%i:%s') as momento_grafico
    from Leitura  
    order by idLeitura desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idMaquina) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 
        CPUM, 
        RAM, 
        DISC,
        TEMP,
        horario,
        CONVERT(varchar, horario, 108) as momento_grafico
    from leitura  
    order by idLeitura desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        CPUM, 
        RAM, 
        DISC,
        TEMP,
        horario,
        DATE_FORMAT(horario,'%H:%i:%s') as momento_grafico
    from Leitura  
    order by idLeitura desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}