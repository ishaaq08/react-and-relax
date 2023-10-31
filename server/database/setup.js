// setup.js
const fs = require("fs/promises"); 
require("dotenv").config();

const db = require("./connect");

const setupDatabase = async () => {
  try {
    const sqlFilePath = process.env.DB_URL;
    const sql = await fs.readFile(sqlFilePath, "utf8"); 
    await db.query(sql);
    db.end();
    console.log("Set-up complete.");
  } catch (error) {
    console.error(error);
  }
};

module.exports = setupDatabase;
