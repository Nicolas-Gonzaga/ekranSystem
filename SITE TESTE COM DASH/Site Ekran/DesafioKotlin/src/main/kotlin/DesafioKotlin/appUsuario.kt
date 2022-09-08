package DesafioKotlin

import javax.swing.JOptionPane

fun main() {
    val usuarios = mutableListOf<CriarUsuario>()

    while (true){
        val opcao = JOptionPane.showInputDialog("Digite 1 para cadastro ou 2 para login").toInt()

        if(opcao == 1){
            val usuario = CriarUsuario()
            usuario.nome = JOptionPane.showInputDialog("Digite seu nome completo")
            usuario.email = JOptionPane.showInputDialog("Digite seu email")
            usuario.senha = JOptionPane.showInputDialog("Digite sua senha")
            usuarios.add(usuario)
            JOptionPane.showMessageDialog(null, "Cadastro realizado com sucesso!")
        }

        if (opcao == 2){
            var email = JOptionPane.showInputDialog("Digite seu email")
            var senha = JOptionPane.showInputDialog("Digite sua senha")

            usuarios.forEach { usuarioAtual ->
                if (usuarioAtual.validar(email, senha)){
                    JOptionPane.showMessageDialog(null, "Logado com sucesso!")
                }else {
                    JOptionPane.showMessageDialog(null, "Login inválido")
                }
            }
        }
    }

}