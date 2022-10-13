var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/buscarId/:emailUser", function (req, res) {
    usuarioController.buscarId(req, res);
});

router.get("/buscarCod", function (req, res) {
    usuarioController.buscarCod(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/validarEmail", function (req, res) {
    usuarioController.validarEmail(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarEmpresa", function (req, res) {
    usuarioController.cadastrarEmpresa(req, res);
})

router.post("/cadastrarUnidade", function (req, res) {
    usuarioController.cadastrarUnidade(req, res);
})


router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/insertCod", function (req, res) {
    usuarioController.insertCod(req, res);
})

router.post("/mudarSenha", function (req, res) {
    usuarioController.mudarSenha(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.logar(req, res);
});

module.exports = router;