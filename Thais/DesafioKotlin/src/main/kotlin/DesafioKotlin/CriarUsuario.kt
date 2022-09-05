package DesafioKotlin

class CriarUsuario {
    lateinit var email:String
    lateinit var senha:String

    // criando um lista de String vazia que permite
    // entrada/saída/atualização de itens
    val emailsUsados = mutableListOf<String>()
    val senhasUsadas = mutableListOf<String>()

    fun validarEmail(email:String) {
        emailsUsados.add(email)
    }

    fun validarSenha(senha:String) {
        senhasUsadas.add(senha)
    }

    fun cadastrar():String{
        var frase = "Cadastro realizado com sucesso!Bem vindo"
        emailsUsados.forEach{
            frase += "- $it \r\n"
        }
        senhasUsadas.forEach{
        }
        return frase
    }
}