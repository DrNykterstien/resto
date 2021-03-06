const mongoose = require('mongoose');
const clc = require('cli-color');

const dbConnect = async (uri = process.env.DB_URI, opts = {}) => {
  if (process.env.NODE_ENV == 'development')
    mongoose.set('debug', (collectionName, method, query, doc) => {
      console.log(
        clc.green(`\n${collectionName}.${method}`),
        clc.blue(JSON.stringify(query)),
        clc.red(doc)
      );
    });

  return mongoose.connect(uri, { ...opts, useNewUrlParser: true });
};

const dbDrop = async () => {
  try {
    const db = await mongoose.connection.dropDatabase();
  } catch (error) {
    console.error(error);
  }
};

module.exports = { dbConnect, dbDrop };
