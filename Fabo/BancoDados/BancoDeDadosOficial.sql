create database ekran;
use ekran;

create table Usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(15),
permissoes varchar(10),
fkEmpresa int,
foreign key (fkEmpresa) references Empresa(idEmpresa)
);

create table Empresa(
idEmpresa int primary key auto_increment,
nomeEmpresa varchar(45),
CNPJ char(14)
)auto_increment = 10000;

create table Unidade(
idUnidade int primary key auto_increment,
localUnidade varchar(45),
fkEmpresa int,
foreign key (fkEmpresa) references Empresa(idEmpresa)
)auto_increment = 20000;

create table Totem(
idTotem int primary key auto_increment,
fkUnidade int,
foreign key (fkUnidade) references Unidade(idUnidade)
)auto_increment = 50000;

create table Leitura(
idLeitura int primary key auto_increment,
fkTotem int,
foreign key (fkTotem) references Totem(idTotem),
CPUM int,
qtdProcessador int,
ramTotal decimal(3,2),
ramUso decimal (3,2),
ramUsoPercent int,
discoTotal decimal(5,2),
discoUso decimal(5,2),
discoLivre decimal(5,2),
qtdPacoteEnv int,
qtdPatoceRecv int
)
