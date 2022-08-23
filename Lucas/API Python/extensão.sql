create database extensão;
use extensão;
CREATE TABLE Leitura (
	idLeitura INT PRIMARY KEY AUTO_INCREMENT,
    CPUM int,
    ProcessadorQTD int,
    RAMTotal DECIMAL (5,2),
    RAMUso decimal (5,2),
    RAMUsoTotal decimal(5,2),
    RAMUsoPorcentagem int,
    DISCTotal DECIMAL (5,2),
    DISCUso decimal (5,2),
    DiscLivre decimal (5,2),
    QTDPacotEnv int,
	QTDPacotRec int,
    horario datetime default current_timestamp()
);

SELECT * FROM Leitura;

drop database extensão;