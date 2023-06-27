create table Category (
    id_category int not null auto_increment,
    name varchar(45) not null,
    type varchar(45) not null,
    description varchar(45),

    primary key(id_category)
);

create table Admin (
    id int not null auto_increment,
    name varchar(60) not null,
    email varchar(120) not null unique,
    cpf varchar(11) not null,
    password varchar(255) not null,

    primary key(id)
);

create table Employee (
	id_employee int not null auto_increment,
    name_employee varchar (120) not null,
    cpf varchar(11) not null,
    email varchar(120) not null,
    position varchar(45) not null,

    primary key(id_employee)
);

create table Area (
    id_area int not null auto_increment,
    name_area varchar(45) not null,
    description_area varchar(45),
	id_employee int not null,

    primary key(id_area),
    foreign key(id_employee) references Employee(id_employee)
);