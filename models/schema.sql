DROP DATABASE IF EXISTS recordDB;
CREATE DATABASE recordDB;

USE recordDB;

CREATE TABLE albums(
  id INT NOT NULL AUTO_INCREMENT,
  artist VARCHAR(45) NULL,
  album VARCHAR(45) NULL,
  releaseyear INT NOT NULL,
  wtt BOOLEAN,
  PRIMARY KEY (id)
);

INSERT INTO albums (artist, album, releaseyear, wtt)
VALUES ("Kevin Morby", "OMG", 2019, "true");

INSERT INTO songs (title, artist, genre)
VALUES ("TRNDSTTR","Black Coast", "Dance");

INSERT INTO songs (title, artist, genre)
VALUES ("Who's Next", "The Who", "Classic Rock");

INSERT INTO songs (title, artist, genre)
VALUES ("Yellow Submarine", "The Beatles", "Classic Rock");

