import psutil
import time
i = 0

while True:
    i = i + 1
    media = psutil.cpu_percent(interval = 1, percpu = True)
    Processador = psutil.cpu_count(logical=True)
    TempoUso = "%0.2f" % ((psutil.cpu_times (percpu= False)) [0]/1000)
    DiscoTotal = "%0.2f" % (psutil.disk_usage("C:\\")[0] / 10**9)
    DiscoUso = "%0.2f" % (psutil.disk_usage("C:\\")[1] / 10**9)
    DiscoLivre = "%0.2f" % (psutil.disk_usage("C:\\")[2] / 10**9)
    RamTotal = "%0.2f" % (psutil.virtual_memory() [0] / 10**9)
    RamUso = "%0.2f" % (psutil.virtual_memory() [3] / 10**9)
    RamUsoPercent = "%0.2f" % (psutil.virtual_memory() [2])
    PctEnv = "%0.2f" % (psutil.net_io_counters(pernic=False, nowrap=True) [2] / 1024)
    PctRecv = "%0.2f" % (psutil.net_io_counters(pernic=False, nowrap=True) [3]/ 1024)

    def criarTabela():
        soma = 0
        print(f"{i}ªLeitura")
        for x in media:
            soma = soma + x
        print("Média de uso CPU: {:.2f}".format(soma/8), "%")
        print(f"Processador(qtd): {Processador} und")
        print(f"Tempo de uso: {TempoUso}s")
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
        time.sleep(2)
    criarTabela()