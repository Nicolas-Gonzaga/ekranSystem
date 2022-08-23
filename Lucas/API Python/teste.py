from operator import ne
from tkinter import N
from traceback import print_tb
from datetime import datetime
import psutil
import time 
import mysql.connector
from mysql.connector import errorcode

i = 0
while (i < 10):
 i+= 1   
try:
	db_connection = mysql.connector.connect(host='localhost', user='aluno', password='sptech', database='moniToll')
	print("Database connection made!")
except mysql.connector.Error as error:
	if error.errno == errorcode.ER_BAD_DB_ERROR:
		print("Database doesn't exist")
	elif error.errno == errorcode.ER_ACCESS_DENIED_ERROR:
		print("User name or password is wrong")
	else:
		print(error)

# else:
# 	db_connection.close()
 

porcentagem_cpu = psutil.cpu_percent()
frequencia_cpu = psutil.cpu_freq()
    

ram = (psutil.virtual_memory())
ramPercent = ram.percent 

disk = psutil.disk_usage('C:\\')
diskPercent = disk.percent

net = psutil.net_io_counters(pernic=False, nowrap=True)

    #vetor = [porcentagem_cpu,ram.total,ram.used,ram.percent,disk.total,disk.used,disk.percent,net.bytes_sent,net.bytes_sent,net.packets_sent,net.packets_recv]
diahora = datetime.now()
formatoh = diahora.strftime("%d/%m/%Y %H:%M:%S")

    # print("Medida", i, "-", formatoh, ": Porcentagem da CPU:", porcentagem_cpu, "|", "Frequencia CPU:", frequencia_cpu[0])

    #  cpu1 = ("Porcentagem da CPU:", porcentagem_cpu, "|", "Frequencia CPU:", frequencia_cpu[0])
    
    
    # print()

    # # print("Medida", i, "-", formatoh, ": Porcentagem RAM:", ram.percent, "|","Quantidade RAM em Uso: {:.1f}".format(ram.used*10**-9), "GB")
     
    # ram1 ("Porcentagem RAM:", ram.percent, "|","Quantidade RAM em Uso: {:.1f}".format(ram.used*10**-9), "GB")


    # print()

    # print("Medida", i, "-", formatoh, ": Porcentagem Disco", disk.percent, "|", 'Quantidade Disco em Uso: {:.2f}'.format(disk.used*10**-9), "GB")

    #print("Internet:", net)

    # print(ram.percent)
    # print()
    # print()
db_connection = mysql.connector.connect(host="localhost", user="aluno", passwd="sptech", database="moniToll")
cursor = db_connection.cursor()
sql = "INSERT INTO dadosMedidas (cpuPercent, ramPercent, diskPercent) VALUES (%s, %s, %s)"
values = [porcentagem_cpu, ramPercent, diskPercent]
cursor.execute(sql, values)
# current_date = date.today()
# formatted_date = current_date.strftime('%d/%m/%Y')

# print(formatted_date)
print("\n")
print(cursor.rowcount, "record inserted.")
print("\n")
db_connection.commit()     
db_connection.close()
    # i+=1
time.sleep(1)