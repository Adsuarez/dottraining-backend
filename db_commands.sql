SHOW DATABASES;

CREATE DATABASE dottraining_db;

USE dottraining_db;

CREATE TABLE IF NOT EXISTS `user` (
	`id` INT NOT NULL UNIQUE AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL UNIQUE,
    PRIMARY KEY (`id`)
);

DESCRIBE user;

SELECT * FROM user;

INSERT INTO user (email, password) VALUES ("admin@dottraining.com", "AdminPassword");

INSERT INTO user (email, password) VALUES ("aprendiz01@ejemplo.com", "AprendizPassword");