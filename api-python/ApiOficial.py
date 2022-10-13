import psutil
# import pyodbc
import mysql.connector
from mysql.connector import errorcode
import datetime
from datetime import date
from datetime import datetime
#https://learn.microsoft.com/pt-br/azure/azure-sql/database/connect-query-python?view=azuresql
# cnxn = pyodbc.connect('DRIVER={Devart ODBC Driver for SQLAzure};'
#         'Server=dbekran.database.windows.net;'
#         'Database=dbeKran;Port=3306;'
#         'User ID=eKranAdm;Password=1sis@grupo6'
#         'Trusted_connection = yes;')
#         cursor = cnxn.cursor()

# config = {
#   'host':'dbekran',
#   'user':'eKranAdm@dbeKran',
#   'password':'1sis@grupo6',
#   'database':'dbeKran',
#   'client_flags': [mysql.connector.ClientFlag.SSL],
#   'ssl_ca': './DigiCertGlobalRootG2.crt.pem'
# }
# conn = ''
i = 0
while True:
    i += 1

    # try:
    #     conn = mysql.connector.connect(**config)
    #     print("Connection established")
    # except mysql.connector.Error as err:
    #     if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
    #         print("Something is wrong with the user name or password")
    #     elif err.errno == errorcode.ER_BAD_DB_ERROR:
    #         print("Database does not exist")
    #     else:
    #         print(err)
    # else:
    #     cursor = conn.cursor()

    try:
        db_connection = mysql.connector.connect(
            host='localhost', user='usuario', password='urubu100', database='ekran')
    except mysql.connector.Error as error:
        if error.errno == errorcode.ER_BAD_DB_ERROR:
            print("Não encontrei o banco")
        elif error.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Credenciais erradas")
        else:
            print(error)

    # Processador
    arrayAtual = psutil.cpu_percent(interval=3, percpu=True)
    psutilCpuPercent = 0
    f = 0
    while (f < len(arrayAtual)):
        psutilCpuPercent += arrayAtual[f]
        f += 1
    psutilCpuPercent /= len(arrayAtual)
    cpuPercent = ["%0.2f" % (psutilCpuPercent), "%0.2f" % (
        psutilCpuPercent * 1.10), "%0.2f" % (psutilCpuPercent * 0.95)]
    cpuPercent = [psutilCpuPercent, psutilCpuPercent *
                  1.10, psutilCpuPercent * 0.95]

    # Disco
    psutilDiskPercent = psutil.disk_usage('C:\\')[3]
    diskPercent = [psutilDiskPercent, psutilDiskPercent *
                   0.95, psutilDiskPercent * 1.05]

    # Ram
    psutilRamPercent = psutil.virtual_memory()[2]
    ramPercent = [psutilRamPercent, psutilRamPercent *
                  1.15, psutilRamPercent * 1.05]

    # Internet Upload
    psutilMbUpload = psutil.net_io_counters()[0] * 10**-9
    psutilMbDownload = psutil.net_io_counters()[1] * 10**-9
    mbUpload = [psutilMbUpload, psutilMbUpload * 1.1, psutilMbUpload * 0.95]
    mbDownload = [psutilMbDownload, psutilMbDownload *
                  1.1, psutilMbDownload * 0.95]

    print("------------------------------------------")

    cursor = db_connection.cursor()
    # cursor = conn.cursor()
    fkTotem = 50000
    f = 0
    while f < len(cpuPercent):
        hora = datetime.now().strftime('%H:%M')
        dia = date.today().strftime('%Y/%m/%d')
        sql = "INSERT INTO Leitura (fkTotem, cpuPercent, diskPercent, ramPercent, mbUpload, mbDownload, horario, dia) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)"
        values = [fkTotem, float("%0.2f" % (cpuPercent[f])), float("%0.2f" % (diskPercent[f])), float(
            "%0.2f" % (ramPercent[f])), float("%0.3f" % (mbUpload[f])), float("%0.3f" % (mbDownload[f])), hora, dia]
        print(values)
        cursor.execute(sql, values)
        fkTotem += 1
        f += 1

    print(i, "valor inserindo no banco.")
    print("------------------------------------------")
    print("\r")
    db_connection.commit()
    db_connection.close()
    # conn.commit()
    # conn.close()