DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INTEGER NOT NULL AUTO_INCREMENT,
  MessageText VARCHAR(255) NULL,
  id_Rooms INTEGER NULL DEFAULT NULL,
  id_Users INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */


CREATE TABLE Users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  UserName VARCHAR(255) NULL DEFAULT 'anonymous',
  PRIMARY KEY (id)
);


CREATE TABLE Rooms (
  id INTEGER NOT NULL AUTO_INCREMENT,
  RoomName VARCHAR(255) NULL DEFAULT 'Lobby',
  PRIMARY KEY (id)
);


CREATE TABLE Users_Friends (
  id INTEGER NOT NULL AUTO_INCREMENT,
  friendName INTEGER NULL,
  id_Users INTEGER NULL,
  PRIMARY KEY (id)
);

ALTER TABLE Messages ADD FOREIGN KEY (id_Rooms) REFERENCES Rooms (id);
ALTER TABLE Messages ADD FOREIGN KEY (id_Users) REFERENCES Users (id);
ALTER TABLE Users_Friends ADD FOREIGN KEY (friendName) REFERENCES Users (id);
ALTER TABLE Users_Friends ADD FOREIGN KEY (id_Users) REFERENCES Users (id);

ALTER TABLE Users ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
ALTER TABLE Messages ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
ALTER TABLE Rooms ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
ALTER TABLE Users_Friends ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

