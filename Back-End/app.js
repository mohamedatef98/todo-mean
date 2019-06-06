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

const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'PUT, POST, GET, DELETE, OPTIONS',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

(async function run() {
    await mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useFindAndModify: false});
    app.use('/', usersRouter);
    app.use('/todos', todosRouter);
})();

module.exports = app;
