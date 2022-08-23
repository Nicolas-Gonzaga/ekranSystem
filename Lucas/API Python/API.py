import psutil
import time
import mysql.connector
from mysql.connector import errorcode


i = 0
while True:
    i = i + 1

    try:
      db_connection = mysql.connector.connect(
          host='localhost', user='lucas', password='Lucas070804', database='extensão')
      print("Conexão ao banco estabelecida!")
    except mysql.connector.Error as error:
      if error.errno == errorcode.ER_BAD_DB_ERROR:
          print("Erro: Database não existe")
      elif error.errno == errorcode.ER_ACCESS_DENIED_ERROR:
          print("Erro: Nome ou senha incorretos")
      else:
          print(error)

    media = psutil.cpu_percent(interval=1, percpu=True)
    Processador = psutil.cpu_count(logical=True)
    # TempoUso = "%0.2f" % ((psutil.cpu_times (percpu= False)) [0]/1000)
    DiscoTotal = "%0.2f" % (psutil.disk_usage("C:\\")[0] / 10**9)
    DiscoUso = "%0.2f" % (psutil.disk_usage("C:\\")[1] / 10**9)
    DiscoLivre = "%0.2f" % (psutil.disk_usage("C:\\")[2] / 10**9)
    RamTotal = "%0.2f" % (psutil.virtual_memory()[0] / 10**9)
    RamUso = "%0.2f" % (psutil.virtual_memory()[3] / 10**9)
    RamUsoPercent = "%0.0f" % (psutil.virtual_memory()[2])
    PctEnv = "%0.0f" % (psutil.net_io_counters(
        pernic=False, nowrap=True)[2] / 1024)
    PctRecv = "%0.0f" % (psutil.net_io_counters(
        pernic=False, nowrap=True)[3] / 1024)

    def criarTabela():
        soma = 0
        print(f"{i}ªLeitura")
        for x in media:
            soma = soma + x
        print("Média de uso CPU: {:.0f}".format(soma/8), "%")
        print(f"Processador(qtd): {Processador} und")
        #print(f"Tempo de uso: {TempoUso}s")
        print(f"Disco total: {DiscoTotal}GB")
        print(f"Disco em uso: {DiscoUso}GB")
        print(f"Disco livre: {DiscoLivre}GB")
        print(f"Memoria RAM total: {RamTotal}GB")
        print(f"Memoria RAM em uso: {RamUso}GB")
        print(f"Memoria RAM em uso %: {RamUsoPercent}%")
        print(f"Quantidade de pacotes de Internet enviados: {PctEnv}Kbps")
        print(f"Quantidade de pacotes de Internet recebidos: {PctRecv}Kbps")
        print("\n")
        print("\n")
        time.sleep(5)
        criarTabela() 

    cursor = db_connection.cursor()
    sql = "INSERT INTO Leitura (CPUM,ProcessadorQTD,RAMTotal,RAMUso,RAMUsoPorcentagem,DISCTotal,DISCUso,DiscLivre,QTDPacotEnv,QTDPacotRec) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
    values = [media,Processador,RamTotal,RamUso,RamUsoPercent,DiscoTotal,DiscoUso,DiscoLivre,PctEnv,PctRecv]
    cursor.execute 
    (sql, values)
    
    print(i, "captura de dados inserida.")
    print("\n")
    db_connection.commit()
    db_connection.close()
    time.sleep(3)