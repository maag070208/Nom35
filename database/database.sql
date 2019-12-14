CREATE DATABASE Nom35;

USE Nom35;

CREATE TABLE Encuestados (
	NoEncuestado INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Departamento VARCHAR(50),
	PuntosEncuesta INT
);

CREATE TABLE Departamentos (
	NoEncuestado INT NOT NULL,
	Departamento VARCHAR(50),
	PuntosEncuesta INT
);

DELIMITER %
 CREATE TRIGGER PuntosDepa
     AFTER INSERT ON Encuestados
     FOR EACH ROW
     BEGIN
     INSERT INTO Departamentos(Departamento,NoEncuestado, PuntosEncuesta)
     VALUES (NEW.Departamento, NEW.NoEncuestado, NEW.PuntosEncuesta);
     
     END;
%
SELECT Departamento, sum(PuntosEncuesta) as suma
    FROM Departamentos
    GROUP BY Departamento
;

ALTER TABLE Encuestados AUTO_INCREMENT=1;

ALTER TABLE Departamentos AUTO_INCREMENT=1;

 SELECT Departamento, SUM(PuntosEncuesta) 
 FROM Encuestados 
 GROUP BY Departamento;

 select NoEncuestado,PuntosEncuesta 
 from Encuestados 
 WHERE PuntosEncuesta=(SELECT MAX(PuntosEncuesta) FROM Encuestados);

SELECT Departamento,PuntosEncuesta
FROM Departamentos 
ORDER BY PuntosEncuesta DESC;

SELECT Departamento,PuntosEncuesta,NoEncuestado 
FROM Encuestados  
ORDER BY PuntosEncuesta DESC;