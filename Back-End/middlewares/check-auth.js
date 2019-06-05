const {verifyToken} = require('../lib/jwt.service');

module.exports = (req, res, next) => {
    try{
        const token = req.get('Authorization') ? req.get('Authorization') : req.params.token;
        if(!token)
            throw new Error('no token provided');
        const decoded = verifyToken(token);
        req.userId = decoded.userId;
        next()
    }
    catch(e){
        res.status(401).send({
            error: true,
            message: 'Invalid Token'
        })
    }
};