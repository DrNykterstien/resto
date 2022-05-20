const mongoose = require("mongoose");
const { dbConnect, dbDrop } = require("../src/utils/db");
require("dotenv").config();

beforeAll(async () => {
  jest.setTimeout(10000);
  const uri = process.env.TEST_DB_URI;
  await dbConnect(uri);
});

afterAll(async () => {
  await dbDrop();
  await mongoose.connection.close();
});
