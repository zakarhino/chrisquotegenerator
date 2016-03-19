const config = require('../../config/config.js');
const mongoose = require('mongoose');

let mongo_config = {};
let url = config.development.db.url;

if(process.env.NODE_ENV === "production") {
  mongo_config.user = config.production.db.user;
  mongo_config.pass = config.production.db.pass;
  url = config.production.db.url;
}

mongoose.connect(url, mongo_config);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Mongoose connected!');
});

module.exports = db;
