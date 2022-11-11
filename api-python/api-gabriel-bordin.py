import psutil
import mysql.connector
from mysql.connector import errorcode
import datetime
from datetime import date
from datetime import datetime

i = 0
while True:

    try:
        db_connection = mysql.connector.connect(
            host='localhost', user='ekran', password='urubu100', database='ekran')
    except mysql.connector.Error as error:
        if error.errno == errorcode.ER_BAD_DB_ERROR:
            print("Não encontrei o banco")
        elif error.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Credenciais erradas")
    else:
        print(error)



         arrayAtual = psutil.cpu_percent(interval=2) 
          (psutil.cpu_percent(interval=2),))

    print("psutil.cpu_percent(interval=2) = %s" %
          (psutil.cpu_percent(interval=2),))

    print("The number of CPUs is : %s" % (psutil.cpu_count(), ))

    print("The CPU utilization of all the CPUs is: %s" %
          (psutil.cpu_percent(interval=2, percpu=True), ))

    print("------------------------------------------")

    cursor = db_connection.cursor()
     # cursor = conn.cursor()  

      
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