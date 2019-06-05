const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('dotenv').config()

const usersRouter = require('./routes/users');
const todosRouter = require('./routes/todos');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

(async function run() {
    await mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
    app.use('/', usersRouter);
    app.use('/todos', todosRouter);
})();

module.exports = app;
