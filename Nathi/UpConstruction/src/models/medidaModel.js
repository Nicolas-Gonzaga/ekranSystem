var database = require("../database/config");

function buscarUltimasMedidas(idTransporte, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        lm35_temperatura,
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_transporte = ${idTransporte}
                    order by id desc`;
    } else if  (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql =  `select 
                        lm35_temperatura, 
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_transporte = ${idTransporte}
                    order by id desc limit ${limite_linhas}`;
} else {
    console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    return
} console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idTransporte) { instrucaoSql = ''

if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `select top 1
    lm35_temperatura, 
                    CONVERT(varchar, momento, 108) as momento_grafico, 
                    fk_transporte 
                    from medida where fk_transporte = ${idTransporte} 
                order by id desc`;

} else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql =`select 
                        lm35_temperatura, 
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_transporte 
                        from medida where fk_transporte = ${idTransporte} 
                    order by id desc limit 1`;
}  else {
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
