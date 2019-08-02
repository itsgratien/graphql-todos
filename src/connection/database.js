const mongoose = require('mongoose');

require('dotenv').config();

const { mongoDB_URI} = process.env;
const Db = mongoose.connect(mongoDB_URI, {useNewUrlParser: true, useFindAndModify: true});

module.exports = Db;