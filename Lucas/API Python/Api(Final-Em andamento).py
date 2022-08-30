from datetime import datetime
import psutil
import mysql.connector
import time 
from mysql.connector import errorcode

# i = 0
while True:
    # i = i + 1

    try:
        db_connection = mysql.connector.connect(
            host='localhost', user='root', password='Lucas0708', database='ekran')
        print("Conectei no banco!")
    except mysql.connector.Error as error:
        if error.errno == errorcode.ER_BAD_DB_ERROR:
             print("Não encontrei o banco")
        elif error.errno == errorcode.ER_ACCESS_DENIED_ERROR:
           print("Credenciais erradas")
        else:
           print(error)

    # Processador
    processador = psutil.cpu_count()
    porcentagem_cpu = psutil.cpu_percent()
    porcentagem_cpu2 = porcentagem_cpu * 1.10
    porcentagem_cpu3 = porcentagem_cpu * 0.95

    # Disco
    discoTotal =(psutil.disk_usage("C:\\")[0] / 10**9)
    discoUso = (psutil.disk_usage("C:\\")[1] / 10**9)
    discoLivre = (psutil.disk_usage("C:\\")[2] / 10**9)
    disk = psutil.disk_usage('C:\\')
    diskPercent = disk.percent
    diskPercent2 = diskPercent * 0.95
    diskPercent3 = diskPercent2 * 3

    # Ram
    ramTotal = (psutil.virtual_memory() [0] / 10**9)
    ramUso =  (psutil.virtual_memory() [3] / 10**9)
    # ramUsoPercent = "%0.2f" % (psutil.virtual_memory() [2])
    ram = (psutil.virtual_memory())
    ramPercent = ram.percent
    ramPercent2 = ramPercent * 1.15
    ramPercent3 = ramPercent2 * 1.05

    # Internet 
    pctEnv = (psutil.net_io_counters() [2] / 1024)
    pctRecv = (psutil.net_io_counters() [3]/ 1024)
    

    dataHora = datetime.now()
    formatoh = dataHora.strftime("%d/%m/%Y %H:%M:%S")

    db_connection = mysql.connector.connect(host="localhost", user="root", passwd="Lucas0708", database="ekran")
    cursor = db_connection.cursor()
    fkTotem = 1
    sql = "INSERT INTO Leitura (fkTotem, CPUM, qtdProcessador, ramTotal, ramUso,  ramUsoPercent, discoTotal, discoUso, discoLivre, discoPercent, qtdPacoteEnv, qtdPacoteRecv, dataHora) VALUES (%s,%s, %s, %s, %s, %s,%s,%s,%s,%s,%s,%s,%s)"
    values = [ fkTotem, porcentagem_cpu, processador, ramTotal,  ramUso, ram.percent, discoTotal, discoUso, discoLivre, disk.percent, pctEnv, pctRecv, dataHora,]
    cursor.execute
    (sql, values)

    fkTotem = 2
    sql = "INSERT INTO Leitura ( fkTotem, CPUM, ramUsoPercent, discoPercent,  dataHora) VALUES (%s,%s, %s, %s, %s)"
    values = [fkTotem, porcentagem_cpu2, ramPercent2, diskPercent2, dataHora]
    cursor.execute
    (sql, values)

    fkTotem = 3
    sql = "INSERT INTO Leitura ( fkTotem, CPUM, ramUsoPercent, discoPercent,  dataHora) VALUES (%s,%s, %s, %s, %s)"
    values = [fkTotem, porcentagem_cpu2, ramPercent2, diskPercent2, dataHora]
    cursor.execute
    (sql, values)


    print("\n")
    print(cursor.rowcount, "Inserindo no banco.")
    db_connection.commit()
    db_connection.close()    
    time.sleep(5)