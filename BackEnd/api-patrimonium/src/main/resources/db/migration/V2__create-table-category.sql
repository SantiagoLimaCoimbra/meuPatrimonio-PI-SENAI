create table Category (
    id int not null auto_increment,
    name varchar(45) not null,
    type varchar(45) not null,
    description varchar(45),

    primary key(id)
);