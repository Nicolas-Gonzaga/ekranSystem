package banco

data class dataComponente (
    var idComponente: Int,
    var nome: String
) {
    constructor() : this(0,"")
}

data class dataSecao (
    var idSecao: Int,
    var nome: String,
    var fkComponente: Int,
    var fkSubsecao: Int
) {
    constructor() : this(0,"", 0, 0)
}

data class dataLeitura (
    var idLeitura: Int,
    var hora: String,
    var dia: String,
    var fkTotem: Int
) {
    constructor() : this(0,"", "", 0)
}