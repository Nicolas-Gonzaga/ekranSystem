package DesafioKotlin

import javax.swing.JOptionPane

fun main() {
    val usuario1 = CriarUsuario()
    usuario1.email = JOptionPane.showInputDialog("Digite seu email")
    usuario1.senha = JOptionPane.showInputDialog("Digite sua senha")

    usuario1.validarEmail(usuario1.email)
    usuario1.validarSenha(usuario1.senha)

    JOptionPane.showMessageDialog(null, usuario1.cadastrar())
}