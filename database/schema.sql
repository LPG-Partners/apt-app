/* this will delete and crete apartmentApp database*/
drop database if exists apartmentApp;
create database apartmentApp;


/* this will enter database*/
use apartmentApp;

/* this will create user database*/
create table users(
  unique_user_id integer primary key,
  user_first_name text not null,
  user_last_name text not null, 
  user_email text not null,
  user_password text not null,
  user_phone_number VARCHAR(10),
  user_recovery_email text,
  securityQ1 text,
  securityQ2 text,
  securityQ3 text
);

/* this will create group database*/

CREATE TABLE aptGroups (
   group_id int not null auto_increment,
   leader_id int not null,
   primary key (group_id),
   foreign key (leader_id) references users(unique_user_id)
);

/* this will create group_user database*/
create table groupUserRelationship(
  group_user_relationship_id int not null auto_increment,
  group_id int,
  user_id int,
  primary key (group_user_relationship_id),
  foreign key (group_id) references aptGroups(group_id),
  foreign key (user_id) references users(unique_user_id)
);
