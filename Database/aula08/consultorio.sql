
CREATE DATABASE consultorio1;
USE consultorio1;

CREATE TABLE pacientes (
	paciente_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR(50), 
    sobrenome VARCHAR(100)

);

CREATE TABLE especialidades(
	especialidade_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100)
);


CREATE TABLE medicos(
	medico_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, -- cria a chave primaria
	nome VARCHAR(50), 
    sobrenome VARCHAR(100),
    medico_especialidade INT,
    FOREIGN KEY(medico_especialidade)
		REFERENCES especialidades(especialidade_id)

);



CREATE TABLE consultas(
	consulta_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data_consulta DATE,
    hora_consulta TIME,
    paciente_idF INT,
    medico_idF INT,
    FOREIGN KEY(paciente_idF) REFERENCES pacientes(paciente_id),
    FOREIGN KEY(medico_idF) REFERENCES medicos(medico_id)
);







