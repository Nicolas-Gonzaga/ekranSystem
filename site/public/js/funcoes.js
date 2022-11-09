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

function wrongLogin(){
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
function validarpagina(){
    if(window.location.href =="../public/dashboardTeste.html"){
        alert("Oi")
    }
}