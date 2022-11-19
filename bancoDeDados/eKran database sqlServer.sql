create table Perfil(
idPerfil int primary key,
permissao varchar(10)
);
create table Empresa(
idEmpresa int primary key identity(10000, 1),
nomeEmpresa varchar(45),
CNPJ char(14)
);
create table Usuario(
idUsuario int primary key identity(1, 1),
nome varchar(45),
email varchar(45),
senha varchar(15),
fkEmpresa int,
foreign key (fkEmpresa) references Empresa(idEmpresa),
fkPerfil int,
foreign key (fkPerfil) references Perfil(idPerfil) 
);
create table Unidade(
idUnidade int primary key identity(20000, 1),
localUnidade varchar(45),
fkEmpresa int,
foreign key (fkEmpresa) references Empresa(idEmpresa)
);
create table Totem(
idTotem int primary key identity(50000, 1),
sistemaOperacional varchar(2),
fkUnidade int,
foreign key (fkUnidade) references Unidade(idUnidade)
);
create table Leitura(
idLeitura int primary key identity(1, 1),
hora char(8),
dia char(10),
fkTotem int,
foreign key (fkTotem) references Totem(idTotem)
);
create table loocaLeitura(
idLeitura int primary key identity(1, 1),
cpuPercent decimal(5,2),
diskPercent decimal(5,2),
ramPercent decimal(5,2),
mbUpload decimal(7,3),
mbDownload decimal(7,3),
fkLeitura int,
foreign key (fkLeitura) references Leitura(idLeitura)
);
create table crawlerLeitura(
idLeitura INT PRIMARY KEY identity(1, 1),
nome VARCHAR(45),
minimo DECIMAL(9,3),
valor DECIMAL(9,3),
maximo DECIMAL(9,3),
fkLeitura int,
foreign key (fkLeitura) references Leitura(idLeitura),
fkSecao INT,
foreign key (fkSecao) references crawlerSecao(idSecao)
);
create table geolocalizationLeitura(
idLocalization INT PRIMARY KEY identity(1, 1),
latitude DECIMAL(9,7),
longitude DECIMAL(10,7),
dia CHAR(10),
hora CHAR(8),
fkTotem INT,
foreign key (fkTotem) references Totem(idTotem)
);

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

insert into Usuario (nome, email, senha, fkEmpresa, fkPerfil) values
('adm','adm','123',10000,111);