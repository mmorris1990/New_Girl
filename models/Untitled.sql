DROP DATABASE IF EXISTS scheduler;
CREATE DATABASE scheduler;
USE scheduler;
 
DROP TABLE IF EXISTS events;
CREATE TABLE events (
 id INT NOT NULL AUTO_INCREMENT,
 start_date datetime NOT NULL,
 end_date datetime NOT NULL,
 text varchar(255) DEFAULT NULL,
 PRIMARY KEY (id)
);
