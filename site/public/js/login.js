function entrar() {
    aguardar();

    var formulario = new URLSearchParams(new FormData(document.getElementById("form_login")));

    console.log("FORM LOGIN: ", formulario.get("login"));
    console.log("FORM SENHA: ", formulario.get("senha"));
    console.log("FORM USUARIO: ", formulario.get("usuario"));


    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        // if (resposta.ok) {
        //     console.log(resposta);

        //     resposta.json().then(json => {
        //         console.log(json);
        //         console.log(JSON.stringify(json));

        //         sessionStorage.LOGIN_USUARIO = json.login;
        //         sessionStorage.NOME_USUARIO = json.nome;
        //         sessionStorage.ID_USUARIO = json.id;

        //         setTimeout(function () {
        //             window.location = "/index.html";
        //         }, 1000);
        //     });

        // } else {

        //     console.log("Erro de login!");

        //     resposta.text().then(texto => {
        //         console.error(texto);
        //         // limparFormulario();
        //         finalizarAguardar(texto);
        //     });
        // }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function validarSessao() {
    aguardar();

    var login = sessionStorage.logemail;
    var permissoes = sessionStorage.logpermissoes;

    var h1Titulo = document.getElementById("h1_titulo");

    if (login != null && permissoes != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        h1Titulo.innerHTML = `${login}`;

        finalizarAguardar();
    } else {
        window.location = "login.html";
    }
}

function sair() {
    aguardar();
    sessionStorage.clear();
    finalizarAguardar();
    window.location = "login.html";
}

/* function logar() {
    // aguardar();

    var logEmail = logemail.value;
    var logPass = logpass.value;
    var logPermissoes = logpermissoes.value;

    var loginButton = document.getElementById('login');

    // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
    if (logEmail == "" || logPass == "" || logPermissoes == "") {
        alert("Seus dados não coferem!");
        return false;
    }

    console.log("FORM LOGIN: ", logemail);
    console.log("FORM SENHA: ", logpass);
    console.log("FORM USUARIO: ", logpermissoes);


    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            logemailServer: logEmail,
            logpassServer: logPass,
            logpermissoesServer: logPermissoes
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.logemail = json.logEmail;
                sessionStorage.logpass = json.logPass;
                sessionStorage.logpermissoes = json.logPermissoes;
                sessionStorage.FK_EMPRESA = json.fkEmpresa


                setTimeout(function () {
                    if (logPermissoes == "111") {
                        window.location = "../dashboardTeste.html";
                    } else if (logPermissoes == "222") {
                        window.location = "../funDash.html";
                    } else if (logPermissoes == "333") {
                        window.location = "../cadEmpresa.html";
                    } else {
                        window.location = "../";
                    }
                })
            })
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function girar() {
    girar1
}


function sumirMensagem() {
    cardErro.style.display = "none"
} */