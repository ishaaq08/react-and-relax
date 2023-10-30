-- SQL Script
DROP TABLE IF EXISTS token;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS fib_answers;
DROP TABLE IF EXISTS fill_in_blanks;


CREATE TABLE users (
    user_id INT GENERATED ALWAYS AS IDENTITY, 
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,  -- usually you'd store a hashed version of the password
    email VARCHAR(255) UNIQUE,
    date_registered TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id)
);

CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES users("user_id")
);


CREATE TABLE fill_in_blanks (
    fib_id INT GENERATED ALWAYS AS IDENTITY, 
    question VARCHAR(255) NOT NULL UNIQUE,
    PRIMARY KEY (fib_id)
);


CREATE TABLE fib_answers (
    fiba_id INT GENERATED ALWAYS AS IDENTITY, 
    fib_id INT NOT NULL,
    content VARCHAR(255) NOT NULL UNIQUE,
    is_correct BOOLEAN,
    PRIMARY KEY (fiba_id),
    FOREIGN KEY (fib_id) REFERENCES fill_in_blanks("fib_id")

);

