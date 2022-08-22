-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */


/* Mexida1-Michelly coloquei o nosso script*/
/* Mexida8-Michelly e Rafaela arrumamos todo o banco de dados*/
-- DROP DATABASE VINICOLA;

-- DROP DATABASE VINICOLA;
-- drop database vinicola;
CREATE DATABASE VINICOLA;
USE VINICOLA;

CREATE TABLE EMPRESA (
    CNPJ CHAR(19) PRIMARY KEY,
    NOME_EMPRESA VARCHAR(40),
    CEP CHAR(9)
);


-- DROP TABLE USUARIO;

CREATE TABLE USUARIO (
    IDUSUARIO INT PRIMARY KEY AUTO_INCREMENT,
    FKEMPRESA CHAR(19),
    FOREIGN KEY (FKEMPRESA)
        REFERENCES EMPRESA (CNPJ),
    EMAIL VARCHAR(30),
    SENHA VARCHAR(20),
    TIPOFUNC VARCHAR(30),
    TEL CHAR(13)
)  AUTO_INCREMENT=1000;

select * from usuario;


CREATE TABLE TIPO_VINHO (
    IDTIPO_VINHO INT PRIMARY KEY AUTO_INCREMENT,
    TIPO_VINHO VARCHAR(45),
    TEMP_MAX DECIMAL(3 , 1 ),
    TEMP_MIN DECIMAL(3 , 1 ),
    UMID_MAX DECIMAL(3 , 1 ),
    UMID_MIN DECIMAL(3 , 1 )
)  AUTO_INCREMENT = 100;

CREATE TABLE ARMAZEM (
    IDARMAZEM INT PRIMARY KEY AUTO_INCREMENT,
    FKEMPRESA CHAR(19),
    FOREIGN KEY (FKEMPRESA)
        REFERENCES EMPRESA (CNPJ),
    FKTIPO_VINHO INT,
    FOREIGN KEY (FKTIPO_VINHO)
        REFERENCES TIPO_VINHO (IDTIPO_VINHO)
)  AUTO_INCREMENT=300;

CREATE TABLE SENSORES (
    IDSENSORES INT PRIMARY KEY AUTO_INCREMENT,
    FKARMAZEM INT,
    FOREIGN KEY (FKARMAZEM)
        REFERENCES ARMAZEM (IDARMAZEM)
)  AUTO_INCREMENT=400;

CREATE TABLE REGISTROS (
IDREGISTROS INT PRIMARY KEY AUTO_INCREMENT,
    FKSENSOR INT,
    FOREIGN KEY (FKSENSOR)
REFERENCES SENSORES (IDSENSORES),
    REGISTRO_TEMP DECIMAL(3 , 1 ),
    REGISTRO_UMID DECIMAL(3 , 1 ),
    REGISTRO_LUM DECIMAL (3 , 1 ),
    REGISTRO_PRESENCA CHAR (5)
);
alter table Registros modify column REGISTRO_PRESENCA int;
select * from armazem;

CREATE TABLE FALE_CONOSCO (
    IDFALE INT PRIMARY KEY AUTO_INCREMENT,
    NOME VARCHAR(45),
    EMAIL VARCHAR(45),
    ASSUNTO VARCHAR(45),
    DESCRICAO VARCHAR(255)
)  AUTO_INCREMENT=500;




INSERT INTO EMPRESA VALUES
('011.111.111/0001-11', 'Magazine do Vinho', '08330-430');

INSERT INTO TIPO_VINHO VALUES
(null, 'Espumante', 20.0, 14.0, 60.0, 75.0),
(null, 'Vinho Branco', 12.0, 10.0, 60.0, 75.0),
(null, 'Vinho Tinto', 17.0, 13.0, 60.0, 75.0),
(null, 'Vinho Verde', 14.0, 12.0, 60.0, 75.0),
(null, 'Vinho Rosé', 18.0, 14.0, 60.0, 75.0);
select * from tipo_vinho;

insert into Armazem values
(null, '011.111.111/0001-11', 102);

insert into sensores values
(null, '300');
select * from sensores;


insert into Usuario values
(null,'011.111.111/0001-11', 'nic@gmail.com', '1122', 'Admin', '(11)948476990');


select * from registros;
INSERT INTO REGISTROS (REGISTRO_UMID, REGISTRO_TEMP, REGISTRO_LUM, REGISTRO_PRESENCA,FKSENSOR)
VALUES (70, 25, 70, 1, 400),
(50, 25, 70, 1, 400),
(70, 20, 70, 1, 400),
(10, 15, 70, 1, 400),
(80, 10, 70, 1, 400),
(70, 17, 70, 1, 400),
(60, 12, 70, 1, 400),
(30, 19, 70, 1, 400),
(70, 25, 70, 1, 400),
(50, 27, 70, 1, 400),
(60, 24, 70, 1, 400),
(70, 10, 70, 1, 400),
(90, 13, 70, 1, 400);

ALTER TABLE Registros ADD column REGISTRO_MOMENTO DATETIME DEFAULT current_timestamp();

/* para sql server - remoto - produção */

CREATE DATABASE VINICOLA;
USE VINICOLA;

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE EMPRESA (
    CNPJ CHAR(19) PRIMARY KEY,
    NOME_EMPRESA VARCHAR(40),
    CEP CHAR(9)
);


-- DROP TABLE USUARIO;

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE USUARIO (
    IDUSUARIO INT PRIMARY KEY IDENTITY,
    FKEMPRESA CHAR(19),
    FOREIGN KEY (FKEMPRESA)
        REFERENCES EMPRESA (CNPJ),
    EMAIL VARCHAR(30),
    SENHA VARCHAR(20),
    TIPOFUNC VARCHAR(30),
    TEL CHAR(13)
)  ;

-- SQLINES LICENSE FOR EVALUATION USE ONLY
select * from usuario;


-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE TIPO_VINHO (
    IDTIPO_VINHO INT PRIMARY KEY IDENTITY,
    TIPO_VINHO VARCHAR(45),
    TEMP_MAX DECIMAL(3 , 1 ),
    TEMP_MIN DECIMAL(3 , 1 ),
    UMID_MAX DECIMAL(3 , 1 ),
    UMID_MIN DECIMAL(3 , 1 )
) ;

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE ARMAZEM (
    IDARMAZEM INT PRIMARY KEY IDENTITY,
    FKEMPRESA CHAR(19),
    FOREIGN KEY (FKEMPRESA)
        REFERENCES EMPRESA (CNPJ),
    FKTIPO_VINHO INT,
    FOREIGN KEY (FKTIPO_VINHO)
        REFERENCES TIPO_VINHO (IDTIPO_VINHO)
)  ;

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE SENSORES (
    IDSENSORES INT PRIMARY KEY IDENTITY,
    FKARMAZEM INT,
    FOREIGN KEY (FKARMAZEM)
        REFERENCES ARMAZEM (IDARMAZEM)
)  ;

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE REGISTROS (
IDREGISTROS INT PRIMARY KEY IDENTITY,
    FKSENSOR INT,
    FOREIGN KEY (FKSENSOR)
REFERENCES SENSORES (IDSENSORES),
    REGISTRO_TEMP DECIMAL(3 , 1 ),
    REGISTRO_UMID DECIMAL(3 , 1 ),
    REGISTRO_LUM DECIMAL (3 , 1 ),
    REGISTRO_PRESENCA CHAR (5)
);
alter table Registros modify column REGISTRO_PRESENCA int;
-- SQLINES LICENSE FOR EVALUATION USE ONLY
select * from armazem;

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE FALE_CONOSCO (
    IDFALE INT PRIMARY KEY IDENTITY,
    NOME VARCHAR(45),
    EMAIL VARCHAR(45),
    ASSUNTO VARCHAR(45),
    DESCRICAO VARCHAR(255)
)  ;




INSERT INTO EMPRESA VALUES
('011.111.111/0001-11', 'Magazine do Vinho', '08330-430');

INSERT INTO TIPO_VINHO VALUES
(null, 'Espumante', 20.0, 14.0, 60.0, 75.0),
(null, 'Vinho Branco', 12.0, 10.0, 60.0, 75.0),
(null, 'Vinho Tinto', 17.0, 13.0, 60.0, 75.0),
(null, 'Vinho Verde', 14.0, 12.0, 60.0, 75.0),
(null, 'Vinho Rosé', 18.0, 14.0, 60.0, 75.0);
-- SQLINES LICENSE FOR EVALUATION USE ONLY
select * from tipo_vinho;

insert into Armazem values
(null, '011.111.111/0001-11', 102);

insert into sensores values
(null, '300');
-- SQLINES LICENSE FOR EVALUATION USE ONLY
select * from sensores;


insert into Usuario values
(null,'011.111.111/0001-11', 'nic@gmail.com', '1122', 'Admin', '(11)948476990');


-- SQLINES LICENSE FOR EVALUATION USE ONLY
select * from registros;
INSERT INTO REGISTROS (REGISTRO_UMID, REGISTRO_TEMP, REGISTRO_LUM, REGISTRO_PRESENCA,FKSENSOR)
VALUES (70, 25, 70, 1, 400),
(50, 25, 70, 1, 400),
(70, 20, 70, 1, 400),
(10, 15, 70, 1, 400),
(80, 10, 70, 1, 400),
(70, 17, 70, 1, 400),
(60, 12, 70, 1, 400),
(30, 19, 70, 1, 400),
(70, 25, 70, 1, 400),
(50, 27, 70, 1, 400),
(60, 24, 70, 1, 400),
(70, 10, 70, 1, 400),
(90, 13, 70, 1, 400);

