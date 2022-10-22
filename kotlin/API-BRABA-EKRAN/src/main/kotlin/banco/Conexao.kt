package banco

import org.apache.commons.dbcp2.BasicDataSource
import org.springframework.jdbc.core.JdbcTemplate

class Conexao {
    val driverClassName =  "com.microsoft.sqlserver.jdbc.SQLServerDriver"
    val url = "dbekran.database.windows.net"
    val username = "eKranAdm"
    val password = "1sis@grupo6"

    fun getJdbcTemplate(): JdbcTemplate {
        val dataSource = BasicDataSource()
        dataSource.driverClassName = driverClassName
        dataSource.url = url
        dataSource.username = username
        dataSource.password = password

        val jdbcTemplate = JdbcTemplate(dataSource)
        return jdbcTemplate
    }
}