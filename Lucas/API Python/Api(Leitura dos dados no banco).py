from datetime import datetime
import psutil
import mysql.connector
import time 
from mysql.connector import errorcode

i = 0
while True:
    i = i + 1
    try:
        db_connection = mysql.connector.connect(
            host='localhost', user='Gabes', password='urubu100', database='ekran')
        print("Conectei no banco!")
    except mysql.connector.Error as error:
        if error.errno == errorcode.ER_BAD_DB_ERROR:
             print("Não encontrei o banco")
        elif error.errno == errorcode.ER_ACCESS_DENIED_ERROR:
           print("Credenciais erradas")
        else:
           print(error)


    media = psutil.cpu_percent()
    Processador = psutil.cpu_count()
    # TempoUso = "%0.2f" % ((psutil.cpu_times (percpu= False)) [0]/1000)
    DiscoTotal =(psutil.disk_usage("C:\\")[0] / 10**9)
    DiscoUso = (psutil.disk_usage("C:\\")[1] / 10**9)
    DiscoLivre = (psutil.disk_usage("C:\\")[2] / 10**9)
    RamTotal = (psutil.virtual_memory()[0] / 10**9)
    RamUso = (psutil.virtual_memory()[3] / 10**9)
    RamUsoPercent =(psutil.virtual_memory()[2])
    PctEnv = (psutil.net_io_counters()[2] / 1024)
    PctRecv = (psutil.net_io_counters()[3] / 1024)
    
    
   
    dataHora = datetime.now()
    formatoh = dataHora.strftime("%d/%m/%Y %H:%M:%S")

   
    db_connection = mysql.connector.connect(host="localhost", user="Gabes", passwd="urubu100", database="ekran")
    cursor = db_connection.cursor()
    sql = "INSERT INTO Leitura (CPUM, Processador, DiscoTotal, DiscoUso, DiscoLivre, RamTotal, RamUso, RamUsoPercent, PctEnv, PctRecv) VALUES (%s, %s, %s, %s, %s,%s,%s,%s,%s,%s)"
    values = [media, Processador, DiscoTotal, DiscoUso, DiscoLivre, RamTotal, RamUso, RamUsoPercent, PctEnv, PctRecv]
    cursor.execute(sql, values)


# current_date = date.today()
# formatted_date = current_date.strftime('%d/%m/%Y')

    print("\n")
    print(cursor.rowcount, "Inserindo no banco.")
    db_connection.commit()
    db_connection.close()    
    time.sleep(5)