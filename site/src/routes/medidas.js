var express = require("express");
var router = express.Router();


var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:valorId", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});
router.post("/alertas", function (req, res) {
    medidaController.alertar(req, res);
})

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

router.get("/mediaT1", function (req, res) {
    medidaController.mediaT1(req, res);
});

router.get("/mediaT2", function (req, res) {
    medidaController.mediaT2(req, res);
});

router.get("/mediaT3", function (req, res) {
    medidaController.mediaT3(req, res);
});

module.exports = router;