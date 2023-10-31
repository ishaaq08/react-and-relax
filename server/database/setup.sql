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
    language VARCHAR(255) NOT NULL,
    difficulty VARCHAR(255) NOT NULL,
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

-- Question 1: Basic structure
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('Every HTML document should start with a declaration of __________.', 'easy', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (1, 'DOCTYPE', true);

-- Question 2: Main root
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('The root element for an HTML document is __________.', 'easy', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (2, 'html', true);

-- Question 3: Metadata and links
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('The section of an HTML document reserved for metadata, scripts, and styles is called the __________.', 'easy', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (3, 'head', true);

-- Question 4: Visible content
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('The element that holds the main content of an HTML document, which is visible to the user, is the __________.', 'easy', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (4, 'body', true);

-- Question 5: Emphasis
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('To emphasize a text in HTML, which is typically displayed in italic, you use the __________ tag.', 'easy', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (5, 'em', true);

-- Question 6: Strong emphasis
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('To provide strong emphasis on a text, which is typically displayed in bold, you use the __________ tag.', 'easy', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (6, 'strong', true);

-- Question 7: Lists
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('An ordered list in HTML is represented using the __________ tag.', 'easy', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (7, 'ol', true);

-- Question 8: Tables
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('The HTML element used to create a table header cell is __________.', 'easy', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (8, 'th', true);

-- Question 9: Image insertion
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('To embed an image in an HTML document, you use the __________ tag.', 'easy', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (9, 'img', true);

-- Question 10: Anchor
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('To create a clickable link in an HTML document, the __________ element is used.', 'easy', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (10, 'a', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (10, 'anchor', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (10, 'link', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (10, 'href', false);

-- Question 11: Form
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('The HTML element used to create a form is __________.', 'easy', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (11, 'form', true);

-- Question 12: Input
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('The HTML element used to create a text input field is __________.', 'easy', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (12, 'input', true);

-- Question 13: Button
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('The HTML element used to create a button is __________.', 'easy', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (13, 'button', true);

-- question 14: document structure
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('What is missing? <html> <head> <title>My First Heading</title> </head> <body> <h1>My First Heading</h1> <p>My first paragraph.</p> </body> </html>', 'medium', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (14, '<!DOCTYPE html>', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (14, '<html>', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (14, '<!doctype>', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (14, '<!DOCTYPE html>', false);

-- question 15: document structure
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('What is missing? <!DOCTYPE html><html> <head> <title>My First Heading</title> </head> <body> <h1>My First Heading</h1> <p>My first paragraph. </body> </html>', 'medium', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (15, '</p>', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (15, '</head>', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (15, '</body>', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (15, '<p>', false);

-- question 16: document structure
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('What is missing? <!DOCTYPE html>  <head> <title>My First Heading</title> </head> <body> <h1>My First Heading</h1> <p>My first paragraph. </p> </body> </html>', 'medium', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (16, '</html>', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (16, '</head>', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (16, '</body>', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (16, '<html>', false);

-- question 17: document structure
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('What is missing? <!DOCTYPE html><html> <title>My First Heading</title> </head> <body> <h1>My First Heading</h1> <p>My first paragraph. </p> </body> </html>', 'medium', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (17, '<head>', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (17, '</head>', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (17, '<body>', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (17, '</body>', false);


-- question 18: document structure
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('What is missing? <!DOCTYPE html><html> <head> <title>My First Heading</title> </head>  <h1>My First Heading</h1> <p>My first paragraph. </p> </html>', 'medium', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (18, '</body>', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (18, '</html>', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (18, '<body>', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (18, '<html>', false);


-- question 19: document structure
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('What is missing? <html> <head> My First Heading</title> </head> <body> <h1>My First Heading</h1> <p>My first paragraph. </p> </body> </html>', 'medium', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (19, '<!DOCTYPE html>', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (19, '<html/>', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (19, '<!doctype htm>', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (19, '<title', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (19, '<head>', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (19, '<title/>', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (19, '<title>', false);

-- question 20: document structure
INSERT INTO fill_in_blanks (question,difficulty,language) VALUES ('What is missing? <!DOCTYPE html><html> <head> <title>My First Heading</title> </head> <body> <h1>My First Heading</h1> <p>My first paragraph. </p> </body> ', 'medium', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (20, '</html>', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (20, '</head>', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (20, '</body>', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (20, '<html>', false);





