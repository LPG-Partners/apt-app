/* this will delete and crete apartmentApp database*/
drop database if exists apartmentApp;
create database apartmentApp;

/* this will enter database*/
use apartmentApp;

/* this will create user database*/
create table users(
  userID integer primary key AUTOINCREMENT,
  email text NOT NULL,
  password text NOT NULL,
  securityQ1 text,
  securityQ2 text,
  securityQ3 text,
);

/* this will create group database*/
create table groups(
  groupID integer primary key AUTOINCREMENT,
  leaderID integer,
  foreign key (leaderID) references users(userID)
);

/* this will create group_user database*/
create table groupUsers(
  groupID integer,
  userID integer,
  foreign key (groupID) references users(userID),
  foreign key (userID) references users(userID)
);
