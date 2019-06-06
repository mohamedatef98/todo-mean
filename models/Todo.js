const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    description: {type: String, maxlength: 100},
    done: {type: Boolean, default: false},
    created_at: {type: Date, default: Date.now}
});

const Todo = mongoose.model('Todo', schema);

module.exports = Todo;