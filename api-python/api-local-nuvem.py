import pyodbc
import textwrap
import psutil
import datetime
from datetime import date
from datetime import datetime
import mysql.connector
from mysql.connector import errorcode

i = 0
fkLeitura = 50 
while (True):
    server = 'dbekran.database.windows.net'
    database = 'dbeKran'
    username = 'eKranAdm'
    password = '1sis@grupo6'
    cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER='+server +
                        ';DATABASE='+database+';ENCRYPT=yes;UID='+username+';PWD=' + password)
    cursor = cnxn.cursor()


    #try:
    #    db_connection = mysql.connector.connect(
    #        host='localhost', user='usuario', password='urubu100', database='ekran')
    #except mysql.connector.Error as error:
    #    if error.errno == errorcode.ER_BAD_DB_ERROR:
    #        print("Não encontrei o banco")
    #    elif error.errno == errorcode.ER_ACCESS_DENIED_ERROR:
    #        print("Credenciais erradas")
    #    else:
    #        print(error)

    #cursorLocal = db_connection.cursor()

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

    f = 0
    fkTotem = 50000

    hora = datetime.now().strftime('%H:%M')
    dia = date.today().strftime('%Y/%m/%d')
    count1 = cursor.execute(f"""
        INSERT INTO Leitura (horario, dia, fkTotem)
        VALUES ('{hora}','{dia}',{fkTotem})""").rowcount

    count = cursor.execute(f"""
        INSERT INTO LoocaLeitura (cpuPercent, diskPercent, ramPercent, mbUpload, mbDownload, fkLeitura) 
        VALUES ({float("%0.2f" % (cpuPercent[f]))},{ float("%0.2f" % (diskPercent[f]))},{float("%0.2f" % (ramPercent[f]))},{float("%0.3f" % (mbUpload[f]))},{float("%0.3f" % (mbDownload[f]))}, {float(fkLeitura)})""").rowcount

    #import pdb; pdb.set_trace()
    cnxn.commit()
    print(f"Insert nuvem {i}")
    print("============================================================================")

    #sql1 = "INSERT INTO Leitura (fkTotem, horario, dia) VALUES (%s,%s,%s)"
    #values1 = [fkTotem, hora, dia]

    #sql = "INSERT INTO LoocaLeitura (cpuPercent, diskPercent, ramPercent, mbUpload, mbDownload, fkLeitura) VALUES(%s,%s,%s,%s,%s,%s)"
    #values = [float("%0.2f" % (cpuPercent[f])), float("%0.2f" % (diskPercent[f])), float(
    #    "%0.2f" % (ramPercent[f])), float("%0.3f" % (mbUpload[f])), float("%0.3f" % (mbDownload[f])), fkLeitura]
    #print(values)
    #cursorLocal.execute(sql1, values1)
    #cursorLocal.execute(sql, values)
    #print(f"Insert local {i}")
    #print("============================================================================")

    #db_connection.commit()
    i+=1
    fkLeitura += 1
    #db_connection.close()


