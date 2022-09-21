package DesafioKotlin

import javax.swing.JOptionPane


class CriarUsuario {
    lateinit var nome:String
    lateinit var email:String
    lateinit var senha:String

    fun validar(emailLogin:String, senhaLogin:String):Boolean {
        return email == emailLogin && senha == senhaLogin
    }
//
}