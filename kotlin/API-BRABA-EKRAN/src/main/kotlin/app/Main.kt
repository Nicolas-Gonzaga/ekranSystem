package app

import javax.swing.JOptionPane

open class Main {
    companion object {
        @JvmStatic
        fun main(args: Array<String>) {

            JOptionPane.showMessageDialog(null, "Teste")

            main()
        }
    }
}