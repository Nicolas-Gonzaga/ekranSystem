CREATE DATABASE termovac;

USE termovac;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE empresa (
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
nomeEmpresa VARCHAR(50) NOT NULL,
emailEmpresarial VARCHAR(60) NOT NULL,
telefoneEmpresarial CHAR(13),
cidadeEstado VARCHAR(60),
endereco VARCHAR(60),
complemento VARCHAR(45),
cep CHAR(9),
cnpj CHAR(18),
senhaEmp INT
)AUTO_INCREMENT 200000;


CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
dht11_umidade DOUBLE, 
dht11_temperatura DOUBLE, 
luminosidade DOUBLE, 
lm35_temperatura DOUBLE, 
chave INT,
	momento DATETIME,
	fk_transporte INT
);
select now();
insert into medida values(null, 1, 1, 200, 25, 1, now(),1);
insert into medida values(null, 1, 2, 11, 3, 1, now(),1);
insert into medida values(null, 1, 1, 200, 50, 1, now(),1);

select lm35_temperatura, 
		momento,
		DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_transporte = 1
                    order by id desc limit 7;

select * from usuario;
select * from aviso;
select * from medida;

 DROP TABLE medida;

insert into medida values (null, 20, '2022-05-20 14:18:00', 1),
(null, 2, '2022-05-20 13:18:00', 1),
						  (null, 8, '2022-05-20 15:18:00', 1),
						  (null, -10,'2022-05-20 17:18:00', 1);

-- DROP DATABASE TERMOVAC;