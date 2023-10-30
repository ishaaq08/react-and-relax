-- SQL Script
DROP TABLE IF EXISTS fib_Answers;
DROP TABLE IF EXISTS fill_in_blanks;
DROP TABLE IF EXISTS token;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY, 
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,  -- usually you'd store a hashed version of the password
    email VARCHAR(255) UNIQUE,
    date_registered TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES users("id")
);

CREATE TABLE fill_in_blanks(
    id INT GENERATED ALWAYS AS IDENTITY,
    question VARCHAR(255) NOT NULL,  
    PRIMARY KEY (id)
);

CREATE TABLE fib_Answers(
    id INT GENERATED ALWAYS AS IDENTITY,
    question_id INT NOT NULL,
    answer VARCHAR(255) NOT NULL,
    is_correct BOOLEAN NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (question_id) REFERENCES fill_in_blanks("id")
);

INSERT INTO fill_in_blanks (question) VALUES ('The capital of India is __________');

INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (1, 'Delhi', true);