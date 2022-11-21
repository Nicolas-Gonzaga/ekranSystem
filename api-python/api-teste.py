from statistics import mean
import time
import psutil
import pyodbc 
import textwrap
from datetime import datetime 
def Conexao():

        # variaveis de conexao
        driver ='{ODBC Driver 18 for SQL Server}'
        server_name = 'dbekran'
        database_name = 'dbeKran'
        server = '{server_name}.database.windows.net,1433'.format(server_name=server_name)
        username = 'eKranAdm'
        password = '1sis@grupo6'
        # definindo banco url 
        connection_string = textwrap.dedent('''
        Driver={driver};
        Server={server};
        Database={database};
        Uid={username};
        Pwd={password};
        Encrypt=yes;
        TrustedServerCertificate=no;
        Connection Timeout=10;
        '''.format(
            driver=driver,
            server=server,
            database=database_name,
            username=username,
            password=password
        )) 

        cnxn:pyodbc.Connection = pyodbc.connect(connection_string) 

        global crsr
        crsr = cnxn.cursor()
        print("Conectado ao banco de dados: Ekran")

def teste():
    
        for x in psutil.process_iter(['pid', 'name', 'cpu_percent', 'memory_percent']):
            datahora = datetime.now()
            formato = datahora.strftime('%d/%m/%Y %H:%M:%S')
            pid = x.info['pid']
            Nome = x.info['name']
            CpuPercent = "%0.2f" % x.info['cpu_percent']
            MemoryPercent = "%0.2f" % x.info['memory_percent']
           
            
            try:
            # Executando comando SQL   
                crsr.execute('''
            INSERT INTO Processos (PID, Nome, CpuPercent, MemoryPercent, datahora) VALUES (?, ?, ?, ?, ?)
            ''', pid, Nome, CpuPercent, MemoryPercent, datahora)
                    # Commit de mudanÃ§as no banco de dados
                crsr.commit()
                print("Leitura inserida na tabela Processos")

            except pyodbc.Error as err:
                crsr.rollback()
                print("Something went wrong: {}".format(err))
            
Conexao()
while True:
    teste()
    time.sleep(5)