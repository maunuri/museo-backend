DROP TABLE IF EXISTS character;

CREATE TABLE character (
    userid SERIAL NOT NULL PRIMARY KEY,
    head INT NOT NULL,
	torso INT NOT NULL,
	legs INT NOT NULL,
	theme INT NOT NULL
);