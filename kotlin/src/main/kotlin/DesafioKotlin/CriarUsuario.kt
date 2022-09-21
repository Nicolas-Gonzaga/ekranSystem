import javax.swing.JOptionPane
import javax.swing.text.StyledEditorKit.BoldAction

class CriarUsuario {
    var nome: String = ""
    var email: String = ""
    var senha: String = ""
    var validar: Boolean = false


    fun validar(emailLogin: String, senhaLogin: String): Boolean {
        if (!validar  && senha.length <= 6) {
            return false
        } else {
            return email == emailLogin && senha == senhaLogin
        }
    }
}





