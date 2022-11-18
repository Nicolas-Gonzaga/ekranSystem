create database ekran;
use ekran;

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
horario time,
dia date,
foreign key (fkTotem) references Totem(idTotem)
)auto_increment = 50;

create table LoocaLeitura(
  idLooca int primary key auto_increment,
  cpuPercent decimal(5,2),
  diskPercent decimal(5,2),
  ramPercent decimal(5,2),
  mbUpload decimal(7,3),
  mbDownload decimal(7,3),
  fkLeitura int,
  foreign key (fkLeitura) references Leitura (idLeitura))auto_increment = 200;
  
create table CrawlerComponente(
  idComponente int auto_increment primary key,
  nome varchar(45));
  
create table CrawlerSecao(
  idSecao int primary key auto_increment,
  nome varchar(45),
  fkComponente int,
  fkSubsecao int,
  foreign key (fkComponente) references CrawlerComponente (idComponente),
  foreign key (fkSubsecao) references CrawlerSecao (idSecao));
  
create table CrawlerLeitura(
  idCrawler int primary key auto_increment,
  nome varchar(45),
  minimo decimal(9,3),
  valor decimal(9,3),
  maximo decimal(9,3),
  fkLeitura int,
  fkSecao int,
  foreign key (fkLeitura) references Leitura (idLeitura),
  foreign key (fkSecao) references CrawlerSecao (idSecao));

insert into Perfil values
('111','ADM'),
('222','FUNC'),
('333','DEV');
insert into Empresa (nomeEmpresa, CNPJ) values
('ēKran','12345678900000'),
('Sptech','12345678900001');
insert into Usuario (nome, email, senha, fkEmpresa, fkPerfil) values
('Joaquim','joaquim.pires@sptech.school','123',10000,333),
('Patrik','patrik.souza@sptech.school','123',10000,333),
('Nicolas','nicolas.gonzaga@sptech.school','123',10000,333),
('Erick','erick.pio@sptech.school','123',10000,333),
('Felipe','felipe.benedicto@sptech.school','123',10000,333),
('Gabriel','gabriel.bordin@sptech.school','123',10000,333);
insert into Unidade (localUnidade, fkEmpresa) values
('Consolação', 10001);
insert into Totem (sistemaOperacional, fkUnidade) values
('Ws', 20000),
('Ws', 20000),
('Ws', 20000);

select * from Usuario;
select * from Perfil;
select * from Empresa;
select * from Unidade;
select * from Totem;
select * from Leitura;


create table esqueciSenha(
  codigo int primary key,
  fkUsuario int,
  foreign key (fkUsuario) references Usuario(idUsuario));

insert into Usuario (nome, email, senha, fkEmpresa, fkPerfil) values
('adm','adm','123',10000,111);
SELECT * FROM usuario WHERE email = 'adm' AND senha = '123' AND fkPerfil = 111;
-- truncate Leitura;
-- truncate Leitura;
create table alerta ( idAlerta int auto_increment, fkTotem int, primary key(idAlerta, fkTotem),
empresa varchar(45), componente varchar(20), metrica decimal(5,2),  descricao varchar(100), foreign key(fkTotem) references Totem (idTotem));