import psutil
import time
import math

i = 0

while True:
        i = i + 1
        def criarTabela():
                print(f"{i}ªLeitura")
                CPU1 = psutil.cpu_percent(interval = 1, percpu = True).percent
                CPU10 = round((10/100) * CPU1)
                CPU2 = CPU1 + CPU10
                CPU5 = round((5/100) * CPU2)
                CPU3 = CPU2 + CPU5
                MEMO1 = "%0.2f" % (psutil.virtual_memory() [3] / 10**9).percent
                MEMO15 = round((15/100) * MEMO1)
                MEMO2 = MEMO1 + MEMO15
                MEMO5 = round((5/100) * MEMO2)
                MEMO3 = MEMO2 - MEMO5
                DISCO1 = "%0.2f" % (psutil.disk_usage("C:\\")[1] / 10**9).percent
                DISCO5 = round((5/100) * DISCO1)
                DISCO2 = DISCO1 - DISCO5
                DISCO3 = DISCO2 * 3
                print("Máquina 1")
                print(f"Média de uso CPU: {CPU1}%")
                print(f"Disco em uso: {MEMO1}%")
                print(f"Memoria RAM em uso %: {DISCO1}%")
                print("\n")
                print("Máquina 2")
                print(f"Média de uso CPU: {CPU2}%")
                print(f"Disco em uso: {MEMO2}%")
                print(f"Memoria RAM em uso %: {DISCO2}%")
                print("\n")
                print("Máquina 3")
                print(f"Média de uso CPU: {CPU3}%")
                print(f"Disco em uso: {MEMO3}%")
                print(f"Memoria RAM em uso %: {DISCO3}%")
                print("\n")
                time.sleep(1.0)
        criarTabela()
