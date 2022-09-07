var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
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


router.post("/autenticar", function (req, res) {
    usuarioController.logar(req, res);
});

module.exports = router;