ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admintest';

SHOW DATABASES;

CREATE DATABASE dottraining_db;

USE dottraining_db;

/*-----------User table commands----------*/
CREATE TABLE IF NOT EXISTS `user` (
	`id` INT NOT NULL UNIQUE AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `permissions` INT NOT NULL,
    PRIMARY KEY (`id`)
);

DESCRIBE user;

SELECT * FROM user;

/* INSERT INTO user (email, password, permissions) VALUES ("test_admin@dottraining.com", "AdminPassword123", 0);

INSERT INTO user (email, password, permissions) VALUES ("test_aprendiz@dottraining.com", "AprendizPassword789", 0);

DELETE FROM user WHERE email = "admin@dottraining.com";

DELETE FROM user WHERE email = "aprendiz01@ejemplo.com"; 

SELECT `id`, `email` FROM `user` WHERE `email` = "admin@dottraining.com";

DROP TABLE user;  */

DELETE FROM user WHERE id >= 1;

 UPDATE user SET permissions = IFNULL(2, permissions) WHERE id = 3;
 
/*------------Training table commands-------------*/
CREATE TABLE IF NOT EXISTS `training` (
	`id` INT NOT NULL AUTO_INCREMENT,
    `createdBy` INT,
    `name` VARCHAR(100) NOT NULL,
    `quotas` INT,
    `studyDays` JSON DEFAULT NULL,
    `enrolledStudents` JSON DEFAULT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`createdBy`) REFERENCES user(`id`)
);

DESCRIBE training;

SELECT * FROM training;

/*Correct JSON valid text
"studyDays": "[{\"date\":\"2023-05-19\",\"startTime\":\"17:15\",\"endTime\":\"19:15\"}]"
*/

DELETE FROM training WHERE id >= 15;

DROP TABLE training; 