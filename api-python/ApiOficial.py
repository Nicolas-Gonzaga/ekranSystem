import psutil
import mysql.connector
from mysql.connector import errorcode

i = 0
while True:
    i += 1

    try:
        db_connection = mysql.connector.connect(host='localhost', user='aluno', password='sptech', database='ekran')
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
    cpuPercent = ["%0.2f" % (psutilCpuPercent), "%0.2f" % (psutilCpuPercent * 1.10), "%0.2f" % (psutilCpuPercent * 0.95)]

    # Disco
    psutilDiskPercent = psutil.disk_usage('C:\\')[3]
    diskPercent = ["%0.2f" % (psutilDiskPercent), "%0.2f" % (psutilDiskPercent * 0.95), "%0.2f" % (psutilDiskPercent * 1.05)]

    # Ram
    psutilRamPercent = psutil.virtual_memory()[2]
    ramPercent = ["%0.2f" % (psutilRamPercent), "%0.2f" % (psutilRamPercent * 1.15), "%0.2f" % (psutilRamPercent * 1.05)]

    # Internet Upload
    psutilMbUpload = psutil.net_io_counters()[0] * 10**-6
    psutilMbDownload = psutil.net_io_counters()[1] * 10**-6
    mbUpload = ["%0.3f" % (psutilMbUpload), "%0.3f" % (psutilMbUpload * 1.1), "%0.3f" % (psutilMbUpload * 0.95)]
    mbDownload = ["%0.3f" % (psutilMbDownload), "%0.3f" % (psutilMbDownload * 1.1), "%0.3f" % (psutilMbDownload * 0.95)]
    
    print("------------------------------------------")

    cursor = db_connection.cursor()
    fkTotem = 50000
    f = 0
    while f < 3:
        sql = "INSERT INTO Leitura (fkTotem, cpuPercent, diskPercent, ramPercent, mbUpload, mbDownload) VALUES (%s,%s,%s,%s,%s,%s)"
        values = [fkTotem, float(cpuPercent[f]), float(diskPercent[f]), float(ramPercent[f]), float(mbUpload[f]), float(mbDownload[f])]
        print(values)
        cursor.execute(sql, values)
        fkTotem += 1
        f += 1

    print(i, "Inserindo no banco.")
    print("------------------------------------------")
    print("\r")
    db_connection.commit()
    db_connection.close()