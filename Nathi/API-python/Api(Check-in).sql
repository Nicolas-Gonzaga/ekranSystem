create database extensao;
use extensao;



CREATE TABLE Leitura(
	idLeitura INT PRIMARY KEY AUTO_INCREMENT,
    CPUM decimal (5,2),
    Processador decimal (5,2),
    DiscoTotal DECIMAL (5,2),
    DiscoUso decimal (5,2),
    DiscoLivre decimal (5,2),
    RamTotal DECIMAL (5,2),
    RamUso decimal (5,2), 	
    RamUsoPercent decimal (5,2),
    PctEnv decimal (5,2),
	PctRecv decimal (5,2)
   #horario datetime default current_timestamp()
);  

SELECT * FROM Leitura;

truncate Leitura;

drop table leitura;
drop database extensao;