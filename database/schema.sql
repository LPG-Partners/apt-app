/* this will delete and crete apartmentApp database*/
drop database if exists apartmentApp;
create database apartmentApp;


/* this will enter database*/
use apartmentApp;

/* this will create user database*/
create table users(
  user_id integer primary key auto_increment,
  email text not null,
  password text not null,
  securityQ1 text,
  securityQ2 text,
  securityQ3 text
);

/* this will create group database*/

CREATE TABLE aptGroups (
   group_id int not null auto_increment,
   leader_id int not null,
   primary key (group_id),
   foreign key (leader_id) references users(user_id)
);

/* this will create group_user database*/
create table groupUserRelationship(
  group_user_relationship_id int not null auto_increment,
  group_id int,
  user_id int,
  primary key (group_user_relationship_id),
  foreign key (group_id) references aptGroups(group_id),
  foreign key (user_id) references users(user_id)
);
