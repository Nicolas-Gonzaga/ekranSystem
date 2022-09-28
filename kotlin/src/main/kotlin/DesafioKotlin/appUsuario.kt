import javax.swing.JOptionPane

fun main() {
    val criarUsuario = mutableListOf<CriarUsuario>()

        val opcao = JOptionPane.showInputDialog("Digite 1 para cadastro ou 2 para login").toInt()

        if (opcao == 1) {
            val usuario = CriarUsuario()
            usuario.nome = JOptionPane.showInputDialog("Digite seu nome completo")
            usuario.email = JOptionPane.showInputDialog("Digite seu email")
            usuario.senha = JOptionPane.showInputDialog("Digite sua senha")

            if (usuario.validar(usuario.email, usuario.senha) == true) {
                criarUsuario.add(usuario)
                JOptionPane.showMessageDialog(null, "Cadastro realizado com sucesso!")
            } else {
                JOptionPane.showMessageDialog(
                    null, """Cadastro invalido!
    Senha Fraca!"""".trimIndent()
                )

            }
        }
            if (opcao == 2) {
                for (v in 1..3) {
                    var email = JOptionPane.showInputDialog("Digite seu email")
                    var senha = JOptionPane.showInputDialog("Digite sua senha")

                    criarUsuario.forEach { usuarioAtual ->
                        if (usuarioAtual.validar(email, senha)) {
                            JOptionPane.showMessageDialog(null, "Logado com sucesso!")
                        } else {
                            JOptionPane.showMessageDialog(null, "Login inválido")
                        }
                    }
                }
            }
    }
