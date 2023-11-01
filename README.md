# Group react-and-relax

## Introduction
Crammer Education is proud to introduce the Revision App, a dynamic and versatile solution to meet the growing demand for effective and engaging remote learning. 
In response to the changing landscape of education due to the pandemic, Crammer has embarked on a mission to provide students across the country with a powerful 
tool to enhance their revision and learning experience.

## 1. Pomodoro Timer
The heart of the  Revision App is the Pomodoro Timer, designed to boost productivity and manage study sessions effectively. Users can set the timer to work in focused intervals,
 with short breaks in between. The timer is a simple yet powerful tool for time management, helping students maintain concentration during their revision.

## 2. Computer Science Revision Games
To make revision enjoyable and effective, the app offers a range of interactive Computer Science revision games. These games are designed to test and reinforce the user's 
knowledge of various computer science topics, making learning fun and engaging.



## Installation

To run the  API locally, follow these steps:

1. Clone the repository to your local machine.

   ```bash
   git clone <repository HTTPS or SSH link>

   ```

2. Once you open the project, navigate to the project directory in your terminal.

   ```bash
   cd <api>

   ```

3. Install the required dependencies. Some independencies may already exist, but by running the below command, you will ensure that you have the latest versions.

   ```bash
   npm install
   npm install express dotenv pg cors
   npm install -D nodemon

   ```

   Make sure to install these dependencies in the root directory where you have the initial `package.json` file, which is where the server exists.

4. Create a `.env` file in the root directory and add your database URL and port information.

   ```
   DB_URL=<your elephant SQL database URL>
   PORT=3000

   ```

(To obtain the ElephantSQL URL, you must register for an ElephantSQL account at https://www.elephantsql.com/ [If the link doesn't work here, copy paste it in a new browser] and establish a new instance. Then, copy and paste the link into the configuration above.)

## Database Setup

Before running the API, you need to set up the database. Run the following command to establish a database connection and to set up the required table.

```bash
npm run setup-db

```

If the setup is successful, you should see the following message:

```
DB connection established.
Set-up complete.

```

## Running the Server

Now that the database is set up, you can start the API server using the following command:

```bash
npm run dev

```

The server will listen on port 3000 by default.
