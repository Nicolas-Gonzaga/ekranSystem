import datetime
import time
from datetime import date, datetime

import mysql.connector
import psutil
import pyodbc
from mysql.connector import errorcode

i = 0
while True: 
    i += 1
    server = 'dbekran.database.windows.net'
    database = 'dbeKran'
    username = 'eKranAdm'
    password = '1sis@grupo6'
    cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER='+server +
                        ';DATABASE='+database+';ENCRYPT=yes;UID='+username+';PWD=' + password)
    cursor = cnxn.cursor()


    
    print(i, "Inserindo no banco:")
    print("------------------------------------------")
    hora = datetime.now().strftime('%H:%M')
    dia = date.today().strftime('%Y/%m/%d')
    # print("PID | Nome | CpuPercent | MemoryPercent")
    for x in psutil.process_iter(['pid', 'name', 'cpu_percent', 'memory_percent']):
        values = [x.info['pid'], x.info['name'], "%0.2f" % x.info['cpu_percent'], "%0.2f" % x.info['memory_percent'], hora, dia]
        count = cursor.execute = ("""INSERT INTO Processos (PID, Nome, CpuPercent, MemoryPercent, hora, dia) VALUES (?,?,?,?,?,?)""").rowcount
        cnxn.commit()
        
        time.sleep(0.1)

    

    time.sleep(3)