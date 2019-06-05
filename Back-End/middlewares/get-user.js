const User = require('../models/User');

module.exports = (req, res, next) => {
    User.findOne({_id: req.userId}).then((user) => {
        req.user = user;
        next();
    })
};