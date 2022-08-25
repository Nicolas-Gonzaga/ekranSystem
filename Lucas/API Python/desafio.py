import psutil
import time 

i = 0
while True:
    i = i + 1


    # media = psutil.cpu_percent()
    Processador = psutil.cpu_count()
    porcentagem_cpu = psutil.cpu_percent()
    porcentagem_cpu2 = porcentagem_cpu * 1.10
    porcentagem_cpu3 = porcentagem_cpu * 0.95

    DiscoTotal =(psutil.disk_usage("C:\\")[0] / 10**9)
    DiscoUso = (psutil.disk_usage("C:\\")[1] / 10**9)
    DiscoLivre = (psutil.disk_usage("C:\\")[2] / 10**9)
    disk = psutil.disk_usage('C:\\')
    diskPercent = disk.percent
    diskPercent2 = diskPercent * 0.95
    diskPercent3 = diskPercent2 * 3


    RamTotal = "%0.2f" % (psutil.virtual_memory() [0] / 10**9)
    RamUso = "%0.2f" % (psutil.virtual_memory() [3] / 10**9)
    RamUsoPercent = "%0.2f" % (psutil.virtual_memory() [2])
    ram = (psutil.virtual_memory())
    ramPercent = ram.percent
    ramPercent2 = ramPercent * 1.15
    ramPercent3 = ramPercent2 * 1.05
    # RamTotal = (psutil.virtual_memory()[0] / 10**9)
    # RamUso = (psutil.virtual_memory()[3] / 10**9)

    PctEnv = "%0.0f" % (psutil.net_io_counters(pernic=False, nowrap=True) [2] / 1024)
    PctRecv = "%0.0f" % (psutil.net_io_counters(pernic=False, nowrap=True) [3]/ 1024)
    
    

   

    
    def criarTabela():
        # soma = 0
        print(f"{i}ªLeitura")
        # for x in media:
        #     soma = soma + x
        # print("Média de uso CPU: {:.2f}".format(soma/8), "%")
        print(f"Processador(qtd): {Processador} und")
        # print(f"Tempo de uso: {TempoUso}s")
        print(f"CPU1 uso %: {porcentagem_cpu}")
        print(f"CPU2 uso %: {porcentagem_cpu2}")
        print(f"CPU3 uso %: {porcentagem_cpu3}")
        print(f"Disco total: {DiscoTotal}GB")
        print(f"Disco em uso: {DiscoUso}GB")
        print(f"Disco livre: {DiscoLivre}GB")
        print(f"Disco1 em uso %: {diskPercent}")
        print(f"Disco2 em uso %: {diskPercent2}")
        print(f"Disco3 em uso %: {diskPercent3}")
        print(f"Memoria RAM total: {RamTotal}GB")
        print(f"Memoria RAM em uso: {RamUso}GB")
        print(f"Memoria RAM1 em uso %: {ramPercent}")
        print(f"Memoria RAM2 em uso %: {ramPercent2}")
        print(f"Memoria RAM3 em uso %: {ramPercent3}")
        print(f"Quantidade de pacotes de Internet enviados: {PctEnv}Kbps")
        print(f"Quantidade de pacotes de Internet recebidos: {PctRecv}Kbps")
        print("\n")
        print("\n")
        time.sleep(2.0)
    criarTabela()