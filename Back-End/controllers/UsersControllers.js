const User = require('../models/User');
const {hash, compare} = require('../lib/bcrypt.service');
const {getToken} = require('../lib/jwt.service');

class UsersController{
    login(req, res) {
        const {email, password} = req.body;
        User.findOne({email}).then(user => {
            if(!user)
                throw new Error('Wrong Credentials');
            const passwordHash = user.password;
            if(compare(password, passwordHash) === false){
                throw new Error('Wrong Credentials');
            }
            const token = getToken(user._id);
            res.status(200).send({
                token
            })
        }).catch(e => {
            return res.status(401).send({
                error: true,
                message: e.message
            });
        })
    }

    signup(req, res) {
        const {username, password, email} = req.body;
        User.findOne({email}).then(user => {
            if(user)
                return res.status(401).send({
                    error: true,
                    message: "Email is used"
                })
            const newUser = new User({
                username,
                email,
                password: hash(password)
            });

            newUser.save().then(() => {
                return res.status(200).send({
                    message: 'User Created Successfully',
                    user: {
                        username,
                        email
                    }
                })
            })
        });

    }
}

module.exports = UsersController;