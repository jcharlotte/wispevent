CREATE DATABASE wisp;

USE wisp;

CREATE TABLE participants(
    id_player INT(2) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE chocorpokkur(
    id_choco INT(2) NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    participant INT(2) NOT NULL,
    FOREIGN KEY (participant) REFERENCES participants(id_player)
) ENGINE = InnoDB;

CREATE TABLE emotes(
    id_emote INT(2) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    participant INT(2) NOT NULL,
    FOREIGN KEY (participant) REFERENCES participants(id_player)
) ENGINE = InnoDB;

CREATE TABLE skybuilder(
    id_skybuilder INT(2) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    participant INT(2) NOT NULL,
    FOREIGN KEY (participant) REFERENCES participants(id_player)
) ENGINE = InnoDB;

CREATE TABLE picture(
    id_picture INT(2) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    participant INT(2) NOT NULL,
    FOREIGN KEY (participant) REFERENCES participants(id_player)
) ENGINE = InnoDB;

CREATE TABLE cushions(
    id_cushion INT(2) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    participant INT(2) NOT NULL,
    FOREIGN KEY (participant) REFERENCES participants(id_player)
) ENGINE = InnoDB;

CREATE TABLE minion(
    id_minion INT(2) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    participant INT(2) NOT NULL,
    FOREIGN KEY (participant) REFERENCES participants(id_player)
) ENGINE = InnoDB;

CREATE TABLE replicas(
    id_replica INT(2) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    participant INT(2) NOT NULL,
    FOREIGN KEY (participant) REFERENCES participants(id_player)
) ENGINE = InnoDB;

CREATE TABLE nanas(
    id_nana INT(2) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    participant INT(2) NOT NULL,
    FOREIGN KEY (participant) REFERENCES participants(id_player)
) ENGINE = InnoDB;