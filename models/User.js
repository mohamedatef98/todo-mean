const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const schema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    todos: {type: [ObjectId], default: []},
    created_at: {type: Date, default: Date.now}
});

const User = mongoose.model('User', schema);

module.exports = User;