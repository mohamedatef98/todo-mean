const jwt = require('jsonwebtoken');

function getToken(userId){
    return jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '3 days'});
}

function verifyToken(token){
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
}

module.exports = {
    getToken,
    verifyToken
};