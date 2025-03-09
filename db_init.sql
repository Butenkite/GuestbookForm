CREATE DATABASE guestbook;
USE guestbook;

DROP TABLE IF EXISTS responses;
create table responses(
	id int(5) auto_increment primary key,
    first_name varchar(255),
    last_name varchar(255),
    job varchar(255), 
    company varchar(255),
    linkedin varchar(255),
    email varchar(255),
    how_meet varchar(255),
    content varchar(255),
    add_me varchar(255),
    post datetime default now()
);

insert into responses (id, first_name, last_name, job, company, linkedin, email, how_meet, content, add_me)
values ('1', 'testfirst', 'testlast', 'testjob', 'test company', 'testlinkedin.com', 'testemail@email.com', 'work', 'testcontent', 'confirm');

insert into responses (first_name, last_name, job, company, linkedin, email, how_meet, content, add_me)
values ('John', 'Doe', 'Nothing', 'Amazon', 'johndoelinkedin.com', 'joohn@email.com', 'work', 'hi bud', 'confirm');

SELECT * FROM responses;