import psutil
import time
i = 0
while i >= 0:
    porcentagem_cpu = psutil.cpu_percent(interval=None, percpu=False)
    ram = psutil.virtual_memory()
    disk = psutil.disk_usage('C:\\')
    net = psutil.net_io_counters(pernic=False, nowrap=True)
    vetor = [porcentagem_cpu, ram.total,ram.used,ram.percent,disk.total,disk.used,disk.percent,net.bytes_sent,net.bytes_sent,net.packets_sent,net.packets_recv]
    print(vetor)
    time.sleep(1.0)
