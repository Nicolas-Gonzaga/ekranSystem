var database = require("../database/config");


function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas} cpuPercent, ramPercent, horario as horarioF 
        from LoocaLeitura join Leitura on fkLeitura = Leitura.idLeitura order by fkLeitura 
        desc;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        date_format(momento, '%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit ${limite_linhas}` */
    `select cpuPercent, ramPercent, horario, date_format(horario, '%H:%i') as horarioF from LoocaLeitura join Leitura on fkLeitura = idLeitura order by fkLeitura desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarMedidaTotem(fkTotem, limite_linhas) {
    
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas} cpuPercent, ramPercent, horario as horarioF from 
        LoocaLeitura join Leitura on fkLeitura = Leitura.idLeitura where fkTotem = ${fkTotem} 
        order by fkLeitura;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        date_format(momento, '%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit ${limite_linhas}` */
    `select cpuPercent, ramPercent, horario, date_format(horario, '%H:%i') as horarioF from LoocaLeitura join Leitura on fkLeitura = idLeitura where fkTotem = ${fkTotem} order by fkLeitura desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function alertar(metrica, frase, componente, totem, empresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verificar():",metrica, frase, componente, totem, empresa);
    
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `

        INSERT INTO alerta ( empresa, componente,metrica, descricao, fkTotem) VALUES ( '${empresa}', '${componente}', '${metrica}', '${frase}', '${totem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 cpuPercent, ramPercent, horario as horarioF from 
        LoocaLeitura join Leitura on fkLeitura = Leitura.idLeitura order by fkLeitura;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // if(local == "dashboardTeste.html"){
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */
    `select cpuPercent, ramPercent, horario, date_format(horario, '%H:%i') as horarioF from LoocaLeitura join Leitura on fkLeitura = idLeitura order by idLeitura desc limit 1`;
    // } else if(window.location.href == "totem1.html"){
    //     instrucaoSql = /* `select 
    //     REGISTRO_TEMP, 
    //     REGISTRO_UMID, 
    //     REGISTRO_MOMENTO,
    //     DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    // from registros  
    // order by idRegistros desc limit 1` */
    // `select cpuPercent, ramPercent, horario, date_format(horario, '%H:%i') as horarioF from LoocaLeitura join Leitura on fkLeitura = idLeitura join totem on fkTotem = idTotem where fkTotem = 50000  order by idLeitura desc limit 1` ;

    // 
}
    else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarMedidasTempoRealporTotem(fkTotem) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 cpuPercent, ramPercent, horario as horarioF from 
        LoocaLeitura join Leitura on fkLeitura = Leitura.idLeitura where fkTotem = ${fkTotem} 
        order by Leitura.idLeitura;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // if(local == "dashboardTeste.html"){
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */
    `select cpuPercent, ramPercent, horario, date_format(horario, '%H:%i') as horarioF from LoocaLeitura join Leitura on fkLeitura = idLeitura where fkTotem = ${fkTotem} order by idLeitura desc limit 1`;
    // } else if(window.location.href == "totem1.html"){
    //     instrucaoSql = /* `select 
    //     REGISTRO_TEMP, 
    //     REGISTRO_UMID, 
    //     REGISTRO_MOMENTO,
    //     DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    // from registros  
    // order by idRegistros desc limit 1` */
    // `select cpuPercent, ramPercent, horario, date_format(horario, '%H:%i') as horarioF from LoocaLeitura join Leitura on fkLeitura = idLeitura join totem on fkTotem = idTotem where fkTotem = 50000  order by idLeitura desc limit 1` ;

    // 
}
    else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimaMedidaDisco(idAquario){
    
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 diskPercent from LoocaLeitura join Leitura on Leitura.idLeitura = fkLeitura order by Leitura.idLeitura;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */
    `select diskPercent from LoocaLeitura join Leitura on idLeitura = fkLeitura order by idLeitura desc limit 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mediaT1(){
    
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select Leitura.fkTotem, LoocaLeitura.idLeitura, LoocaLeitura.cpuPercent, LoocaLeitura.diskPercent, 
        LoocaLeitura.ramPercent from LoocaLeitura join Leitura on fkLeitura = Leitura.idLeitura where Leitura.fkTotem = 50000;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */
    `select fkTotem, idLeitura, cpuPercent, diskPercent, ramPercent from Leitura join LoocaLeitura on fkLeitura = idLeitura where fkTotem = 50000;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mediaT2(){
    
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select Leitura.fkTotem, LoocaLeitura.idLeitura, LoocaLeitura.cpuPercent, LoocaLeitura.diskPercent, 
        LoocaLeitura.ramPercent from LoocaLeitura join Leitura on fkLeitura = Leitura.idLeitura where Leitura.fkTotem = 50001;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */
    `select fkTotem, idLeitura, cpuPercent, diskPercent, ramPercent from Leitura join LoocaLeitura on fkLeitura = idLeitura where fkTotem = 50000;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mediaT3(){
    
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select Leitura.fkTotem, LoocaLeitura.idLeitura, LoocaLeitura.cpuPercent, LoocaLeitura.diskPercent, 
        LoocaLeitura.ramPercent from LoocaLeitura join Leitura on fkLeitura = Leitura.idLeitura where Leitura.fkTotem = 50002;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */
    `select fkTotem, idLeitura, cpuPercent, diskPercent, ramPercent from Leitura join LoocaLeitura on fkLeitura = idLeitura where fkTotem = 50000;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dadosHistorico(limite_linhas, fkTotem) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas} dia, horario, fkTotem, cpuPercent, ramPercent, diskPercent from Leitura 
        join LoocaLeitura on Leitura.idLeitura = LoocaLeitura.fkLeitura 
        where convert(date, dia) = convert(date, getdate()) and fkTotem = ${fkTotem};`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        date_format(momento, '%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit ${limite_linhas}` */
    `select cpuPercent, ramPercent, horario, date_format(horario, '%H:%i') as horarioF from LoocaLeitura join Leitura on fkLeitura = idLeitura order by fkLeitura desc limit ${limite_linhas}`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasMapas() {
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select t1.* from geolocalizationLeitura t1 inner join (select max(idLocalization) as idLocalization from geolocalizationLeitura GROUP BY fkTotem) t2 on t1.idLocalization = t2.idLocalization`
    } else {
        console.log("\nEsta API só suporta rodar em ambiente cloud\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarEmpresa(empresa) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 diskPercent from LoocaLeitura join Leitura on Leitura.idLeitura = fkLeitura order by Leitura.idLeitura;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = /* `select 
        REGISTRO_TEMP, 
        REGISTRO_UMID, 
        REGISTRO_MOMENTO,
        DATE_FORMAT(REGISTRO_MOMENTO,'%H:%i:%s') as momento_grafico
    from registros  
    order by idRegistros desc limit 1` */
    `select nomeEmpresa from empresa where idEmpresa = '${empresa}'`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimaMedidaDisco,
    buscarMedidaTotem,
    buscarMedidasTempoRealporTotem,
    mediaT1,
    alertar,
    mediaT2,
    mediaT3,
    dadosHistorico,
    buscarMedidasMapas,
    buscarEmpresa
}