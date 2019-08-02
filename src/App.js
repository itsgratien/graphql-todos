const express = require('express');
const {GraphQLServer} = require('graphql-yoga');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();

//bodyParser
app.use(bodyParser.json());

//morgan
app.use(morgan('dev'));


app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));