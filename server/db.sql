create database hackathon;

create table user(
    id int primary key auto_increment,
    full_name varchar(50),
    email varchar(30),
    password varchar(20),
    phone_no varchar(10),
    created_time DATE
);

insert into user(full_name,email,password,phone_no,created_time)
values ("Aarya","aarya@gmail.com","Aarya@123","5874698532","2/3/10"),
       ("jyo","jyo@gmail.com","jyo@123","5874698572","1010/8/8");

create table blogs(
    id int primary key,
    title varchar(20),
    contents varchar(30),
    created_time DATE,
    user_id int,
    category_id int,
    foreign key(user_id) references user(id),
    foreign key(category_id) references categories(id)
);
insert into blogs(id,title,contents,created_time ,user_id,category_id)
values(101,"Title1","contents","1200/4/5",1,1001);

create table categories(
    id int primary key,
    title varchar(30),
    description varchar(50)
);
insert into categories(id,title,description) 
values(1001,"category1","desc1");
