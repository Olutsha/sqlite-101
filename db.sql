--create the table DDL 

create table greetings (
id integer PRIMARY KEY AUTOINCREMENT,
language text,
greeting text
);
-- DML(database manipulation language)
select* from greetings;
select count(*) from greetings;
insert into greetings (language, greeting) values ('zulu', 'sawubona');
--add two more languages
insert into greetings (language, greeting) values ('Xhosa', 'Molo kwedini');
insert into greetings (language, greeting) values ('Mpondo', 'heshe');