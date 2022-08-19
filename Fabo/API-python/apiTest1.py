import psutil
import time
while True:
    percentCpu = psutil.cpu_percent(interval = 1, percpu = False)
    freqCpu = psutil.cpu_freq(percpu= False) [0]
    memoriaTotal = psutil.virtual_memory() [0]
    memoriaDisp = psutil.virtual_memory() [1]
    memoriaUtilizada = psutil.virtual_memory() [2]
    totalGB
