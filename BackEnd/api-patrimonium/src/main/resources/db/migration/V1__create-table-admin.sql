create table Admin (
    id int not null auto_increment,
    name varchar(60) not null,
    email varchar(120) not null unique,
    cpf varchar(11) not null,
    password varchar(120) not null,

    primary key(id)
);