ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admintest';

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

INSERT INTO user (email, password) VALUES ("admin@dottraining.com", "AdminPassword123");

INSERT INTO user (email, password) VALUES ("aprendiz01@ejemplo.com", "AprendizPassword789");

/* DELETE FROM user WHERE email = "admin@dottraining.com";

DELETE FROM user WHERE email = "aprendiz01@ejemplo.com"; 

SELECT `id`, `email` FROM `user` WHERE `email` = "admin@dottraining.com"; */