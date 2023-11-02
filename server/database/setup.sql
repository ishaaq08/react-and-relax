-- SQL Script
DROP TABLE IF EXISTS fib_Answers;
DROP TABLE IF EXISTS fill_in_blanks;
DROP TABLE IF EXISTS token;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS pseudocode;


CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY, 
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,  -- usually you'd store a hashed version of the password
    email VARCHAR(255) UNIQUE,
    date_registered TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    points INT DEFAULT 0,
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

CREATE TABLE pseudocode(
    id INT GENERATED ALWAYS AS IDENTITY,
    difficulty VARCHAR(255) NOT NULL,
    code TEXT NOT NULL,
    question VARCHAR(255) NOT NULL, 
    answer VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
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


-- EASY QUESTIONS:

-- 1.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('In Python, the output function is __________.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (21, 'print', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (21, 'output', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (21, 'echo', false);

-- 2.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('In Python, "True" and "False" are of type __________.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (22, 'bool', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (22, 'string', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (22, 'int', false);

-- 3.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('In Python, to convert a string to integer you use the function __________.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (23, 'int', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (23, 'str2int', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (23, 'to_integer', false);

-- 4.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('Python lists are enclosed in __________.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (24, '[]', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (24, '{}', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (24, '()', false);

-- 5.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('In Python, a single line comment starts with __________.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (25, '#', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (25, '//', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (25, '--', false);

-- MEDIUM QUESTIONS:

-- 1.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('The Python library used for working with arrays and matrices is __________.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (26, 'numpy', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (26, 'arraylib', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (26, 'matrixpy', false);

-- 2.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('The built-in Python function to get all keys from a dictionary is __________.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (27, 'keys()', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (27, 'getkeys()', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (27, 'allkeys()', false);

-- 3.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('Which Python library is specifically designed for data analysis and manipulation? __________.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (28, 'pandas', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (28, 'dataman', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (28, 'pydata', false);

-- 4.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('The method to remove the last item from a list in Python is __________.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (29, 'pop()', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (29, 'remove()', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (29, 'delete()', false);

-- 5.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('In Python, the code "lambda x: x*2" represents a __________.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (30, 'lambda function', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (30, 'list comprehension', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (30, 'generator expression', false);


-- EASY QUESTIONS:

-- 6.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('To get the current date and time in Python, we use the __________ module.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (31, 'datetime', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (31, 'date', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (31, 'time', false);

-- 7.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('In Python, a set is an unordered collection with __________.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (32, 'no duplicate elements', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (32, 'ordered elements', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (32, 'indexed elements', false);

-- 8.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('To repeat a string "Hello" 3 times, you would use __________ in Python.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (33, '"Hello" * 3', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (33, 'repeat("Hello", 3)', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (33, '"Hello".repeat(3)', false);

-- 9.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('To get the absolute value of a number in Python, we use the __________ function.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (34, 'abs', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (34, 'absolute', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (34, 'fabs', false);

-- 10.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('In Python, to concatenate strings you use the __________ operator.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (35, '+', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (35, 'concat', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (35, '&', false);

-- MEDIUM QUESTIONS:

-- 6.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('Which function in Python can be used to read input from the user? __________.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (36, 'input()', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (36, 'get()', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (36, 'read()', false);

-- 7.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('Which function allows you to wait a certain number of seconds in a Python script? __________.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (37, 'sleep()', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (37, 'delay()', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (37, 'wait()', false);

-- 8.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('In Python, the "os" module provides a way to use __________.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (38, 'operating system dependent functionality', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (38, 'string operations', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (38, 'math functions', false);

-- 9.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('The "requests" module in Python is used for __________.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (39, 'making HTTP requests', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (39, 'performing database operations', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (39, 'handling XML data', false);

-- 10.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('Which of these is not a core data type in Python? __________.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (40, 'Class', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (40, 'List', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (40, 'Tuple', false);



-- Inserting sample data into pseudocode table

-- Easy
INSERT INTO pseudocode (difficulty, code, question, answer) VALUES 
('Easy', 'BEGIN\n  PRINT "Hello, World!"\nEND', 'What will the pseudocode output?', 'Hello, World!'),
('Easy', 'BEGIN\n  PRINT 5+3\nEND', 'What will the pseudocode output?', '8'),
('Easy', 'BEGIN\n  PRINT "OpenAI"\nEND', 'What will the pseudocode output?', 'OpenAI'),
('Easy', 'BEGIN\n  PRINT 12-5\nEND', 'What will the pseudocode output?', '7'),
('Easy', 'BEGIN\n  PRINT "ChatGPT"\nEND', 'What will the pseudocode output?', 'ChatGPT'),
('Easy', 'BEGIN\n  PRINT "5 * 3"\nEND', 'What does the pseudocode display?', '5 * 3'),
('Easy', 'BEGIN\n  PRINT 6/2\nEND', 'What will the pseudocode output?', '3'),
('Easy', 'BEGIN\n  PRINT "2 ^ 3"\nEND', 'What does the pseudocode display?', '2 ^ 3'),
('Easy', 'BEGIN\n  PRINT "AI"\nEND', 'What will the pseudocode output?', 'AI'),
('Easy', 'BEGIN\n  PRINT 9+1\nEND', 'What will the pseudocode output?', '10'),
('Medium', 'BEGIN\n  FOR i = 1 TO 5\n    PRINT i\n  END FOR\nEND', 'How many numbers will the pseudocode print?', '5'),
('Medium', 'BEGIN\n  INPUT x\n  PRINT x * 10\nEND', 'What does the pseudocode do?', 'Multiplies input by 10 and prints it'),
('Medium', 'BEGIN\n  INPUT y\n  IF y > 5 THEN\n    PRINT "Greater"\n  ELSE\n    PRINT "Smaller or Equal"\n  END IF\nEND', 'What will the pseudocode print if the input is 3?', 'Smaller or Equal'),
('Medium', 'BEGIN\n  FOR i = 5 DOWNTO 1\n    PRINT i\n  END FOR\nEND', 'What is the first number the pseudocode will print?', '5'),
('Medium', 'BEGIN\n  x = 5\n  y = x + 3\n  PRINT y\nEND', 'What will the pseudocode output?', '8'),
('Medium', 'BEGIN\n  INPUT name\n  PRINT "Hello, " + name\nEND', 'What will the pseudocode print if the input is "Alice"?', 'Hello, Alice'),
('Medium', 'BEGIN\n  z = 10\n  z = z / 2\n  PRINT z\nEND', 'What will the pseudocode output?', '5'),
('Medium', 'BEGIN\n  a = 3\n  b = 4\n  c = a * b\n  PRINT c\nEND', 'What will the pseudocode output?', '12'),
('Medium', 'BEGIN\n  FOR i = 1 TO 3\n    FOR j = 1 TO 2\n      PRINT i, j\n    END FOR\n  END FOR\nEND', 'How many pairs of numbers will the pseudocode print?', '6'),
('Hard', 'BEGIN\n  INPUT n\n  sum = 0\n  FOR i = 1 TO n\n    sum = sum + i\n  END FOR\n  PRINT sum\nEND', 'What will the pseudocode print if the input is 4?', '10'),
('Hard', 'BEGIN\n  INPUT num\n  IF num MOD 2 = 0 THEN\n    PRINT "Even"\n  ELSE\n    PRINT "Odd"\n  END IF\nEND', 'What will the pseudocode print if the input is 7?', 'Odd'),
('Hard', 'BEGIN\n  a = 5\n  b = 3\n  WHILE a > 0\n    a = a - 1\n    b = b + 2\n  END WHILE\n  PRINT b\nEND', 'What will the pseudocode output?', '13'),
('Hard', 'BEGIN\n  arr = [1,2,3,4,5]\n  FOR i = 1 TO LENGTH(arr)\n    PRINT arr[i]\n  END FOR\nEND', 'Which number will be printed last?', '5'),
('Hard', 'BEGIN\n  n = 10\n  factorial = 1\n  FOR i = 1 TO n\n    factorial = factorial * i\n  END FOR\n  PRINT factorial\nEND', 'What will the pseudocode output?', '3628800'),
('Hard', 'BEGIN\n  INPUT str\n  IF LENGTH(str) > 5 THEN\n    PRINT "Long"\n  ELSE\n    PRINT "Short"\n  END IF\nEND', 'What will the pseudocode print if the input is "OpenAI"?', 'Long'),
('Hard', 'BEGIN\n  arr = [2,4,6,8,10]\n  sum = 0\n  FOR i = 1 TO LENGTH(arr)\n    sum = sum + arr[i]\n  END FOR\n  avg = sum / LENGTH(arr)\n  PRINT avg\nEND', 'What will the pseudocode output?', '6'),
('Hard', 'BEGIN\n  INPUT n\n  count = 0\n  FOR i = 1 TO n\n    IF i MOD 2 = 0 THEN\n      count = count + 1\n    END IF\n  END FOR\n  PRINT count\nEND', 'What will the pseudocode print if the input is 8?', '4'),
('Hard', 'BEGIN\n  x = 10\n  y = 20\n  z = 0\n  IF x > y THEN\n    z = x\n  ELSE\n    z = y\n  END IF\n  PRINT z\nEND', 'What will the pseudocode output?', '20'),
('Hard', 'BEGIN\n  numbers = [3,1,4,1,5,9,2,6,5,3]\n  max = numbers[1]\n  FOR i = 2 TO LENGTH(numbers)\n    IF numbers[i] > max THEN\n      max = numbers[i]\n    END IF\n  END FOR\n  PRINT max\nEND', 'What will the pseudocode output?', '9');



-- Question 1: Alternative Answers
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (1, 'DOCTYPEHTML', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (1, 'HTMLTYPE', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (1, 'DOCHEAD', false);

-- Question 2: Alternative Answers
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (2, 'header', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (2, 'document', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (2, 'main', false);

-- Question 3: Alternative Answers
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (3, 'meta', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (3, 'header', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (3, 'top', false);

-- Question 4: Alternative Answers
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (4, 'content', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (4, 'main', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (4, 'section', false);

-- Question 5: Alternative Answers
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (5, 'emphasis', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (5, 'italic', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (5, 'etext', false);

-- Question 6: Alternative Answers
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (6, 'bold', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (6, 'b', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (6, 'heavy', false);

-- Question 7: Alternative Answers
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (7, 'li', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (7, 'ulist', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (7, 'list', false);

-- Question 8: Alternative Answers
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (8, 'td', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (8, 'thead', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (8, 'cell', false);

-- Question 9: Alternative Answers
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (9, 'picture', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (9, 'source', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (9, 'media', false);

-- Question 11: Alternative Answers for Form
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (11, 'forms', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (11, 'inputform', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (11, 'textfield', false);

-- Question 12: Alternative Answers for Input
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (12, 'textfield', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (12, 'forminput', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (12, 'entry', false);

-- Question 13: Alternative Answers for Button
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (13, 'btn', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (13, 'submit', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (13, 'clicker', false);

-- Question 41: Block Element
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('The HTML element used to create a block-level container for content is __________.', 'easy', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (41, 'div', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (41, 'span', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (41, 'block', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (41, 'container', false);

-- Question 42: Inline Element
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('The HTML element used to create an inline container for text is __________.', 'easy', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (42, 'span', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (42, 'div', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (42, 'text', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (42, 'line', false);

-- Question 43: Video Embed
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('To embed a video in an HTML document, you use the __________ tag.', 'easy', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (43, 'video', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (43, 'media', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (43, 'embed', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (43, 'film', false);

-- Question 44: Audio Embed
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('To embed audio in an HTML document, you use the __________ tag.', 'easy', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (44, 'audio', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (44, 'sound', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (44, 'media', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (44, 'mp3', false);

-- Question 45: Script Insertion
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('To include JavaScript in an HTML document, you use the __________ tag.', 'easy', 'html');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (45, 'script', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (45, 'javascript', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (45, 'js', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (45, 'execute', false);

-- 11.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('In Python, a function defined inside another function is called a __________.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (46, 'nested function', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (46, 'inner class', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (46, 'private function', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (46, 'lambda function', false);

-- 12.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('In Python, __________ is used to denote a private variable in a class.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (47, '_ (single underscore)', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (47, '__ (double underscore)', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (47, '$ (dollar sign)', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (47, '* (asterisk)', false);

-- 13.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('The process of converting an object into a stream of bytes in Python is called __________.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (48, 'serialization', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (48, 'parsing', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (48, 'tokenization', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (48, 'compression', false);

-- 14.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('Which Python library is primarily used for numerical and matrix computations? __________.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (49, 'numpy', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (49, 'pandas', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (49, 'math', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (49, 'statistics', false);

-- 15.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('The built-in Python function to get the absolute value of a number is __________.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (50, 'abs()', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (50, 'fabs()', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (50, 'absolute()', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (50, 'absval()', false);

-- 16.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('In Python, __________ is a built-in data type used for ordered and mutable collection of items.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (51, 'list', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (51, 'tuple', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (51, 'set', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (51, 'dictionary', false);

-- 17.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('The method used to add an element at the end of a list in Python is __________.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (52, 'append()', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (52, 'add()', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (52, 'insert()', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (52, 'push()', false);

-- 18.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('In Python, to get the data type of a variable, you use the __________ function.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (53, 'type()', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (53, 'typeof()', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (53, 'gettype()', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (53, 'datatype()', false);

-- 19.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('To create a set in Python, you use curly braces {}. If you use them without any content, you get a __________.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (54, 'dictionary', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (54, 'set', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (54, 'list', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (54, 'tuple', false);

-- 20.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('Which Python built-in function can be used to evaluate a string as a Python expression? __________.', 'medium', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (55, 'eval()', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (55, 'exec()', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (55, 'evaluate()', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (55, 'expression()', false);


-- 11.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('In Python, __________ is a data type that can store multiple items in a single variable.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (55, 'list', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (55, 'int', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (55, 'float', false);

-- 12.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('To convert a string to lowercase in Python, you use the __________ method.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (56, 'lower()', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (56, 'tolower()', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (56, 'downcase()', false);

-- 13.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('In Python, the keyword __________ is used to define a function.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (57, 'def', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (57, 'func', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (57, 'function', false);

-- 14.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('Which method is used in Python to get the last element from a list? __________.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (58, 'list[-1]', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (58, 'list.end()', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (58, 'list.last()', false);

-- 15.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('The Python keyword __________ is used to handle exceptions.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (59, 'try', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (59, 'catch', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (59, 'handle', false);

-- 16.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('In Python, __________ method is used to remove an item from a set.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (60, 'remove()', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (60, 'delete()', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (60, 'discard()', false);

-- 17.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('The __________ function in Python is used to get the length of an object.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (61, 'len()', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (61, 'length()', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (61, 'size()', false);

-- 18.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('Python scripts typically end with the __________ extension.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (62, '.py', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (62, '.python', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (62, '.script', false);

-- 19.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('The "int" function in Python can be used to convert a value to __________.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (63, 'an integer', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (63, 'a string', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (63, 'a float', false);

-- 20.
INSERT INTO fill_in_blanks (question, difficulty, language) VALUES ('In Python, __________ is an infinite loop.', 'easy', 'python');
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (64, 'while True:', true);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (64, 'while 1..10:', false);
INSERT INTO fib_Answers (question_id, answer, is_correct) VALUES (64, 'for i in range(10):', false);
