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


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimaMedidaDisco,
    buscarMedidaTotem,
    buscarMedidasTempoRealporTotem,
    mediaT1,
    mediaT2,
    mediaT3
}