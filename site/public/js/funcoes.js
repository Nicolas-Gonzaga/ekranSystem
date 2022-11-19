// sessão
function validarSessao() {
    // aguardar();

    var logEmail = sessionStorage.logemail;
    var logPermissoes = sessionStorage.logpermissoes;
    var logPass = sessionStorage.logpass;


    var loginButton = document.getElementById('login');

    if (logEmail != null && logPass != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (loginButton != undefined) {
            loginButton.innerHTML = logEmail;
        }
        // b_usuario.innerHTML = logpass;

        // finalizarAguardar();
    } else if (logPermissoes == "111") {
        loginButton = "../dashboard.html";
    } else if (logPermissoes == "222") {
        loginButton = "../dashboard.html";
    } else if (logPermissoes == "333") {
        loginButton = "../cadEmpresa.html";
    }
}

// function limparSessao() {
//     // aguardar();
//     sessionStorage.clear();
//     // finalizarAguardar();
//     window.location = "../login.html";
// }

// // carregamento (loading)
// function aguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "flex";
// }

// function finalizarAguardar(texto) {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "none";

//     var divErrosLogin = document.getElementById("div_erros_login");
//     if (texto) {
//         divErrosLogin.innerHTML = texto;
//     }
// }


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}


/* Esconder a senha */
let contPass = 1
function hidePass() {
    if (contPass % 2 == 0) {
        iconView.src = "assets/img/icons8-closed-eye-30.png"
        logpass.type = "password"
    } else {
        iconView.src = "assets/img/icons8-eye-30.png"
        logpass.type = "text"
    }
    contPass++
}


function senhaIncorreta() {
    logpass.classList.add('wrong-pass')
    setTimeout(function () {
        logpass.classList.remove('wrong-pass')
    }, 2000)
}

function wrongLogin() {
    let inputsLogin = document.getElementsByClassName('form-style')
    inputsLogin[0].classList.add('wrong-pass')
    inputsLogin[1].classList.add('wrong-pass')
    inputsLogin[2].classList.add('wrong-pass')
    setTimeout(function () {
        inputsLogin[0].classList.remove('wrong-pass')
        inputsLogin[1].classList.remove('wrong-pass')
        inputsLogin[2].classList.remove('wrong-pass')
    }, 2000)
}
function validarpagina() {
    if (window.location.href == "../public/dashboardTeste.html") {
        alert("Oi")
    }
}

let contT1 = 0
function FmenuTotem1() {
    const t2 = document.querySelectorAll(".trTotem2")
    const t3 = document.querySelectorAll(".trTotem3")
    if (contT1 % 2 == 0) {
        menuTotem1.classList.add('menuTotemCurrent')
        for (i = 0; i < t2.length; i++) {
            let t2Teste = t2[i]
            t2Teste.style.display = 'none'
        }
        for (i = 0; i < t3.length; i++) {
            let t3Teste = t3[i]
            t3Teste.style.display = 'none'
        }
    } else {
        menuTotem1.classList.remove('menuTotemCurrent')
        for (i = 0; i < t2.length; i++) {
            let t2Teste = t2[i]
            t2Teste.style.display = ''
        }
        for (i = 0; i < t3.length; i++) {
            let t3Teste = t3[i]
            t3Teste.style.display = ''
        }
    }
    contT1++
}

let contT2 = 0
function FmenuTotem2() {
    const t1 = document.querySelectorAll(".trTotem1")
    const t3 = document.querySelectorAll(".trTotem3")
    if (contT2 % 2 == 0) {
        menuTotem2.classList.add('menuTotemCurrent')
        for (i = 0; i < t1.length; i++) {
            let t1Teste = t1[i]
            t1Teste.style.display = 'none'
        }
        for (i = 0; i < t3.length; i++) {
            let t3Teste = t3[i]
            t3Teste.style.display = 'none'
        }
    } else {
        menuTotem2.classList.remove('menuTotemCurrent')
        for (i = 0; i < t1.length; i++) {
            let t1Teste = t1[i]
            t1Teste.style.display = ''
        }
        for (i = 0; i < t3.length; i++) {
            let t3Teste = t3[i]
            t3Teste.style.display = ''
        }
    }
    contT2++
}

let contT3 = 0
function FmenuTotem3() {
    const t1 = document.querySelectorAll(".trTotem1")
    const t2 = document.querySelectorAll(".trTotem2")
    if (contT3 % 2 == 0) {
        menuTotem3.classList.add('menuTotemCurrent')
        for (i = 0; i < t1.length; i++) {
            let t1Teste = t1[i]
            t1Teste.style.display = 'none'
        }
        for (i = 0; i < t2.length; i++) {
            let t2Teste = t2[i]
            t2Teste.style.display = 'none'
        }
    } else {
        menuTotem3.classList.remove('menuTotemCurrent')
        for (i = 0; i < t1.length; i++) {
            let t1Teste = t1[i]
            t1Teste.style.display = ''
        }
        for (i = 0; i < t2.length; i++) {
            let t2Teste = t2[i]
            t2Teste.style.display = ''
        }
    }
    contT3++
}

let dadosTotem1 = { cpuT1: [], ramT1: [], discoT1: [] }
let dadosTotem2 = { cpuT2: [], ramT2: [], discoT2: [] }
let dadosTotem3 = { cpuT3: [], ramT3: [], discoT3: [] }
let medias = { cpuMediaT1: Number([]), ramMediaT1: Number([]), discoMediaT1: Number([]), cpuMediaT2: Number([]), ramMediaT2: Number([]), discoMediaT2: Number([]), cpuMediaT3: Number([]), ramMediaT3: Number([]), discoMediaT3: Number([]), }
function mediaT1() {
    fetch(`/medidas/mediaT1`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                for (i = 0; i < resposta.length; i++) {
                    dadosTotem1.cpuT1.push(resposta[i].cpuPercent)
                    dadosTotem1.ramT1.push(resposta[i].ramPercent)
                    dadosTotem1.discoT1.push(resposta[i].diskPercent)
                }

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function mediaT2() {
    fetch(`/medidas/mediaT2`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                for (i = 0; i < resposta.length; i++) {
                    dadosTotem2.cpuT2.push(resposta[i].cpuPercent)
                    dadosTotem2.ramT2.push(resposta[i].ramPercent)
                    dadosTotem2.discoT2.push(resposta[i].diskPercent)
                }

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function mediaT3() {
    fetch(`/medidas/mediaT3`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                for (i = 0; i < resposta.length; i++) {
                    dadosTotem3.cpuT3.push(resposta[i].cpuPercent)
                    dadosTotem3.ramT3.push(resposta[i].ramPercent)
                    dadosTotem3.discoT3.push(resposta[i].diskPercent)
                }
                contaMedias()

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function contaMedias() {
    for (i = 0; i < dadosTotem1.cpuT1.length; i++) {
        medias.cpuMediaT1 += dadosTotem1.cpuT1[i]
        medias.ramMediaT1 += dadosTotem1.ramT1[i]
        medias.discoMediaT1 += dadosTotem1.discoT1[i]
    }

    for (i = 0; i < dadosTotem2.cpuT2.length; i++) {
        medias.cpuMediaT2 += dadosTotem2.cpuT2[i]
        medias.ramMediaT2 += dadosTotem2.ramT2[i]
        medias.discoMediaT2 += dadosTotem2.discoT2[i]
    }
    for (i = 0; i < dadosTotem3.cpuT3.length; i++) {
        medias.cpuMediaT3 += dadosTotem3.cpuT3[i]
        medias.ramMediaT3 += dadosTotem3.ramT3[i]
        medias.discoMediaT3 += dadosTotem3.discoT3[i]
    }

    medias.cpuMediaT1 = (medias.cpuMediaT1 / dadosTotem1.cpuT1.length).toFixed(2)
    medias.ramMediaT1 = (medias.ramMediaT1 / dadosTotem1.ramT1.length).toFixed(2)
    medias.discoMediaT1 = (medias.discoMediaT1 / dadosTotem1.discoT1.length).toFixed(2)
    medias.cpuMediaT2 = (medias.cpuMediaT2 / dadosTotem2.cpuT2.length).toFixed(2)
    medias.ramMediaT2 = (medias.ramMediaT2 / dadosTotem2.ramT2.length).toFixed(2)
    medias.discoMediaT2 = (medias.discoMediaT2 / dadosTotem2.discoT2.length).toFixed(2)
    medias.cpuMediaT3 = (medias.cpuMediaT3 / dadosTotem3.cpuT3.length).toFixed(2)
    medias.ramMediaT3 = (medias.ramMediaT3 / dadosTotem3.ramT3.length).toFixed(2)
    medias.discoMediaT3 = (medias.discoMediaT3 / dadosTotem3.discoT3.length).toFixed(2)
    mediaT1Cpu.innerHTML = medias.cpuMediaT1
    mediaT2Cpu.innerHTML = medias.cpuMediaT2
    mediaT3Cpu.innerHTML = medias.cpuMediaT3
    mediaT1Ram.innerHTML = medias.ramMediaT1
    mediaT2Ram.innerHTML = medias.ramMediaT2
    mediaT3Ram.innerHTML = medias.ramMediaT3
    mediaT1Disco.innerHTML = medias.discoMediaT1
    mediaT2Disco.innerHTML = medias.discoMediaT2
    mediaT3Disco.innerHTML = medias.discoMediaT3
}

function mediasGeral() {
    mediaT1()
    mediaT2()
    mediaT3()
}

let fkTotem = 50000
let dadosHistT1 = { cpu: [], ram: [], disco: [], hora: [], dia: [] }
let dadosHistT2 = { cpu: [], ram: [], disco: [], hora: [], dia: [] }
let dadosHistT3 = { cpu: [], ram: [], disco: [], hora: [], dia: [] }
function buscarDadosHistorico(fkTotem) {
    fetch(`/medidas/dadosHistorico/${fkTotem}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos Histórico 1: ${JSON.stringify(resposta)}`);
                for(i=0;i<resposta.length;i++){
                dadosHistT1.cpu.push(resposta[i].cpuPercent)
                dadosHistT1.ram.push(resposta[i].ramPercent)
                dadosHistT1.disco.push(resposta[i].diskPercent)
                dadosHistT1.dia.push(resposta[i].dia)
                dadosHistT1.hora.push(resposta[i].horario)
                }
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

    fkTotem = 50001
    fetch(`/medidas/dadosHistorico/${fkTotem}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos Histórico 2: ${JSON.stringify(resposta)}`);
                for(i=0;i<resposta.length;i++){
                    dadosHistT2.cpu.push(resposta[i].cpuPercent)
                    dadosHistT2.ram.push(resposta[i].ramPercent)
                    dadosHistT2.disco.push(resposta[i].diskPercent)
                    dadosHistT2.dia.push(resposta[i].dia)
                    dadosHistT2.hora.push(resposta[i].horario)
                    }
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

    fkTotem = 50002
    fetch(`/medidas/dadosHistorico/${fkTotem}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos Histórico 3: ${JSON.stringify(resposta)}`);
                for(i=0;i<resposta.length;i++){
                    dadosHistT3.cpu.push(resposta[i].cpuPercent)
                    dadosHistT3.ram.push(resposta[i].ramPercent)
                    dadosHistT3.disco.push(resposta[i].diskPercent)
                    dadosHistT3.dia.push(resposta[i].dia)
                    dadosHistT3.hora.push(resposta[i].horario)
                    }
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}


