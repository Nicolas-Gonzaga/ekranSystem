create database ekran;
use ekran;
-- drop database ekran;

create table Perfil(
idPerfil int primary key,
permissao varchar(10)
);

create table Empresa(
idEmpresa int primary key auto_increment,
nomeEmpresa varchar(45),
CNPJ char(14)
)auto_increment = 10000;

create table Usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(15),
fkEmpresa int,
foreign key (fkEmpresa) references Empresa(idEmpresa),
fkPerfil int,
foreign key (fkPerfil) references Perfil(idPerfil)
);

create table Unidade(
idUnidade int primary key auto_increment,
localUnidade varchar(45),
fkEmpresa int,
foreign key (fkEmpresa) references Empresa(idEmpresa)
)auto_increment = 20000;

create table Totem(
idTotem int primary key auto_increment,
sistemaOperacional varchar(2),
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
discoPercent decimal(5,2),
qtdPacoteEnv int,
qtdPatoceRecv int,
dataHora datetime 
)auto_increment = 50;


insert into Perfil values ('111','ADM'),
						  ('222','FUNC'),
						  ('333','DEV');
                          
insert into Empresa values (null, 'ēKran','12345678900000'),
						   (null, 'Sptech','12345678900001');

insert into Usuario values (null,'Lucas','lucas.navasconi@sptech.school','123',10000,333),
						   (null,'Fabio','fabio.seabra@sptech.school','123',10000,333),
                           (null,'Nathalia','nathalia.marques@sptech.school','123',10000,333),
                           (null,'Thais','thais.inacio@sptech.school','123',10000,333),
                           (null,'Gabriela','gabriela.dias@sptech.school','123',10000,333),
                           (null,'Lourenzo','lourenzo.silva@sptech.school','123',10000,333),
                           (null,'Brandao','fernando.brandao@sptech.school','123',10001,111);

insert into Unidade values (null, 'Consolação', 10001);


select * from Usuario;
select * from Perfil;
select * from Empresa;
select * from Unidade;
select* from Totem;
select * from Leitura;
