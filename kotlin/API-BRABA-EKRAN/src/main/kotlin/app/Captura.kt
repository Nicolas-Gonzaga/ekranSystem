package app
import com.github.britooo.looca.api.core.Looca
import java.time.LocalDate
import java.time.LocalTime
import javax.swing.JOptionPane
import kotlin.random.Random
import java.io.File

fun main() {
    val looca = Looca()
    val diskPartition: File = if (looca.sistema.sistemaOperacional == "Windows") {File("C:");} else {File("/")}

    val qntTotens = JOptionPane.showInputDialog("Quantos totens deseja simular além da sua máquina?").toInt()

    while(true) {
        val disco = (diskPartition.freeSpace.toDouble()/1024/1024/1024) * 100 / (looca.grupoDeDiscos.discos[0].tamanho.toDouble()/1024/1024/1024)
        val ram = (looca.memoria.disponivel.toDouble()/1024/1024/1024) * 100 / (looca.memoria.total.toDouble()/1024/1024/1024)
        val valoresPadroes = mutableListOf<Double>(looca.processador.uso, disco, ram)

        var padraoFoi = false
        var fkTotem = 50000
        var hora = "${LocalTime.now()}"
        var data = "${LocalDate.now()}"
        hora = hora.substring(0, 8)
        data = data.substring(0, 4) + "/" + data.substring(5, 7) + "/" + data.substring(8, 10)

        var mensagemFinal = ""

        for (i in 0..qntTotens) {
            val lista = mutableListOf<String>()
            lista += "$fkTotem"
            val random = Random.nextDouble(0.8, 1.3)
            for (f in 0 until valoresPadroes.size) {
                var valor = if (valoresPadroes[f] * random > 100) {100.00} else {valoresPadroes[f] * random}
                if (!padraoFoi) {valor = valoresPadroes[f]}
                var casasDecimais = ""
                when (f) {
                    in 0..2 -> casasDecimais = "%.2f"
                    in 3..4 -> casasDecimais = "%.3f"
                }
                val formatado = String.format(casasDecimais, valor)
                val index = formatado.indexOf(",")
                lista += if (index != -1) {
                    formatado.substring(0, index) + "." + formatado.substring(index + 1)
                } else {
                    formatado
                }
                padraoFoi = true
            }
            lista += "null"
            lista += "null"
            lista += hora
            lista += data
            mensagemFinal += "Computador ${i+1} \r\n $lista \r\n"
            fkTotem++
        }
        JOptionPane.showMessageDialog(null, mensagemFinal)

        Thread.sleep(2000)
    }
}