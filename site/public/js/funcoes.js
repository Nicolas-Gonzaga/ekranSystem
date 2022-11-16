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


let dadosDiscot1 = []
let dadosDiscot2 = []
let dadosDiscot3 = []
let dadosRamt1 = []
let dadosRamt2 = []
let dadosRamt3 = []
let dadosCput1 = []
let dadosCput2 = []
let dadosCput3 = []
let mediaCput1 = 0
let mediaCput2 = 0
let mediaCput3 = 0
let mediaRamt1 = 0
let mediaRamt2 = 0
let mediaRamt3 = 0
let mediaDiscot1 = 0
let mediaDiscot2 = 0
let mediaDiscot3 = 0
function mediaT1() {
    fetch(`/medidas/mediaT1`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                console.log(dadosCput1)
                for (i = 0; i < resposta.length; i++) {
                    dadosCput1.push(resposta[i].cpuPercent)
                    dadosDiscot1.push(resposta[i].diskPercent)
                    dadosRamt1.push(resposta[i].ramPercent)
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
                console.log(dadosCput1)
                for (i = 0; i < resposta.length; i++) {
                    dadosCput2.push(resposta[i].cpuPercent)
                    dadosDiscot2.push(resposta[i].diskPercent)
                    dadosRamt2.push(resposta[i].ramPercent)
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
                console.log(dadosCput1)
                for (i = 0; i < resposta.length; i++) {
                    dadosCput3.push(resposta[i].cpuPercent)
                    dadosDiscot3.push(resposta[i].diskPercent)
                    dadosRamt3.push(resposta[i].ramPercent)
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

function contaMedias(){
    dadosCput1 = dadosCput1.map(Number)
    dadosCput2 = dadosCput2.map(Number)
    dadosCput3 = dadosCput3.map(Number)
    dadosRamt1 = dadosRamt1.map(Number)
    dadosRamt2 = dadosRamt2.map(Number)
    dadosRamt3 = dadosRamt3.map(Number)
    dadosDiscot1 = dadosDiscot1.map(Number)
    dadosDiscot2 = dadosDiscot2.map(Number)
    dadosDiscot3 = dadosDiscot3.map(Number)
    for(i=0;i<dadosCput1.length;i++){
        mediaCput1+=dadosCput1[i]
        mediaRamt1+=dadosRamt1[i]
        mediaDiscot1+=dadosDiscot1[i]
    }


    for(i=0;i<dadosCput2.length;i++){
        mediaCput2+=dadosCput2[i]
        mediaRamt2+=dadosRamt2[i]
        mediaDiscot2+=dadosDiscot2[i]
    }
    for(i=0;i<dadosCput3.length;i++){
        mediaCput3+=dadosCput3[i]
        mediaRamt3+=dadosRamt3[i]
        mediaDiscot3+=dadosDiscot3[i]
    }
     mediaCput1 = (mediaCput1/dadosCput1.length).toFixed(2)
    mediaCput2 = (mediaCput2/dadosCput2.length).toFixed(2)
    mediaCput3 = (mediaCput3/dadosCput3.length).toFixed(2)
    mediaRamt1 = (mediaRamt1/dadosRamt1.length).toFixed(2)
    mediaRamt2 = (mediaRamt2/dadosRamt2.length).toFixed(2)
    mediaRamt3 = (mediaRamt3/dadosRamt3.length).toFixed(2)
    mediaDiscot1 = (mediaDiscot1/dadosDiscot1.length).toFixed(2)
    mediaDiscot2 = (mediaDiscot2/dadosDiscot2.length).toFixed(2)
    mediaDiscot3 = (mediaDiscot3/dadosDiscot3.length).toFixed(2)
    mediaT1Cpu.innerHTML = mediaCput1
    mediaT2Cpu.innerHTML = mediaCput2
    mediaT3Cpu.innerHTML = mediaCput3
    mediaT1Ram.innerHTML = mediaRamt1
    mediaT2Ram.innerHTML = mediaRamt2
    mediaT3Ram.innerHTML = mediaRamt3
    mediaT1Disco.innerHTML = mediaDiscot1
    mediaT2Disco.innerHTML = mediaDiscot2
    mediaT3Disco.innerHTML = mediaDiscot3  
}

function mediasGeral(){
    mediaT1()
    mediaT2()
    mediaT3()
}