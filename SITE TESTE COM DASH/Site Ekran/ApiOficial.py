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
            host='localhost', user='root', password='#Gf40928326802', database='ekran')
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
    discoUso2 = discoUso * 0.95
    discoUso3 = discoTotal
    discoLivre = (psutil.disk_usage("C:\\")[2] / 10**9)
    discoLivre2 = discoTotal - discoUso2
    discoLivre3 = discoTotal - discoUso3
    disk = psutil.disk_usage('C:\\')
    diskPercent = disk.percent
    diskPercent2 = diskPercent * 0.95
    diskPercent3 = 100

    # Ram
    ramTotal = (psutil.virtual_memory() [0] / 10**9)
    ramUso =  (psutil.virtual_memory() [3] / 10**9)
    ramUso2 = ramUso * 1.15
    ramUso3 = ramUso2 * 1.05
    # ramUsoPercent = "%0.2f" % (psutil.virtual_memory() [2])
    ram = (psutil.virtual_memory())
    ramPercent = ram.percent
    ramPercent2 = ramPercent * 1.15
    ramPercent3 = ramPercent2 * 1.05


    # Internet 
    pctEnv = (psutil.net_io_counters() [2] / 1024)
    pctEnv2 = pctEnv + 7
    pctEnv3 = pctEnv - 9
    pctRecv = (psutil.net_io_counters() [3]/ 1024)
    pctRecv2 = pctRecv + 7
    pctRecv3 = pctRecv - 9
    


    db_connection = mysql.connector.connect(host="localhost", user="root", passwd="#Gf40928326802", database="ekran")
    cursor = db_connection.cursor()
    fkTotem = 50000
    sql = "INSERT INTO Leitura (fkTotem, CPUM, qtdProcessador, ramTotal, ramUso,  ramUsoPercent, discoTotal, discoUso, discoLivre, discoPercent, qtdPacoteEnv, qtdPacoteRecv, dataHora) VALUES (%s,%s, %s, %s, %s, %s,%s,%s,%s,%s,%s,%s, (SELECT NOW()))"
    values = [fkTotem, porcentagem_cpu, processador, ramTotal, ramUso, ram.percent, discoTotal, discoUso, discoLivre, disk.percent, pctEnv, pctRecv]
    cursor.execute(sql, values)
    
    fkTotem = 50001
    sql = "INSERT INTO Leitura (fkTotem, CPUM, qtdProcessador, ramTotal, ramUso,  ramUsoPercent, discoTotal, discoUso, discoLivre, discoPercent, qtdPacoteEnv, qtdPacoteRecv, dataHora) VALUES (%s,%s, %s, %s, %s, %s,%s,%s,%s,%s,%s,%s, (SELECT NOW()))"
    values = [fkTotem, porcentagem_cpu2, processador, ramTotal, ramUso2, ramPercent2, discoTotal, discoUso2, discoLivre2, diskPercent2, pctEnv2, pctRecv2]
    cursor.execute(sql, values)

    fkTotem = 50002
    sql = "INSERT INTO Leitura (fkTotem, CPUM, qtdProcessador, ramTotal, ramUso,  ramUsoPercent, discoTotal, discoUso, discoLivre, discoPercent, qtdPacoteEnv, qtdPacoteRecv, dataHora) VALUES (%s,%s, %s, %s, %s, %s,%s,%s,%s,%s,%s,%s, (SELECT NOW()))"
    values = [fkTotem, porcentagem_cpu3, processador, ramTotal, ramUso3, ramPercent3, discoTotal, discoUso3, discoLivre3, diskPercent3, pctEnv3, pctRecv3]
    cursor.execute(sql, values)


    print("\n")
    print(cursor.rowcount, "Inserindo no banco.")
    db_connection.commit()
    time.sleep(5)
    