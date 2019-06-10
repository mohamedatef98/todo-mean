const User = require('../models/User');

module.exports = (req, res, next) => {
    User.findOne({_id: req.userId}).then((user) => {
        if(!user)
            return res.status(401).send({
                error: true,
                message: "User not found"
            });
        req.user = user;
        next();
    })
};