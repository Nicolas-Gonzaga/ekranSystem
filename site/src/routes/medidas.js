var express = require("express");
var router = express.Router();


var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:valorId", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idArmazem", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});
router.get("/tempo-real-totem/:fkTotem", function (req, res) {
    medidaController.buscarMedidasTempoRealporTotem(req, res);
});
router.get("/totem/:fkTotem", function (req, res) {
    medidaController.buscarMedidaTotem(req, res);
})

router.get("/ultimaDisco/:idArmazem", function (req, res) {
    medidaController.buscarUltimaMedidaDisco(req, res);
})

module.exports = router;