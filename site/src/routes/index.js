const express = require("express");
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./public/index.html'));
})


router.get('/login', (req, res) => {
    res.sendFile(path.resolve('./public/Login_SignUp.html'));
})

router.get('/cadEmpresa', (req, res) => {
    res.sendFile(path.resolve('./public/cadEmpresa.html'));
})

router.get('/unidade', (req, res) => {
    res.sendFile(path.resolve('./public/unidade.html'));
})

router.get('/contato', (req, res) => {
    res.sendFile(path.resolve('./public/contato.html'));
})

router.get('/sobre', (req, res) => {
    res.sendFile(path.resolve('./public/sobre.html'));
})

router.get('/servicos', (req, res) => {
    res.sendFile(path.resolve('./public/servicos.html'));
})

router.get('/dashboard', (req, res) => {
    res.sendFile(path.resolve('./public/dashboard.html'));
})

module.exports = router;