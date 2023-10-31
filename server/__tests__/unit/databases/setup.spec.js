// setup.spec.js
const { Pool } = require("pg");
const setupDatabase = require("../../../database/setup");
const fs = require("fs/promises"); // Use promises-based fs module

jest.mock("fs/promises", () => ({
  readFile: jest.fn(() => "SQL content from setup.sql"), // Return expected SQL content.
}));

jest.mock("../../../database/connect", () => ({
  query: jest.fn(),
  end: jest.fn(),
}));

describe("Database Setup", () => {
  it("should set up the database", async () => {
    process.env.DB_URL = "../../../database/setup.sql";
    await setupDatabase();
    expect(fs.readFile).toHaveBeenCalledWith("../../../database/setup.sql", "utf8");
    expect(require("../../../database/connect").query).toHaveBeenCalledWith("SQL content from setup.sql");
    expect(require("../../../database/connect").end).toHaveBeenCalled();
  });
});
