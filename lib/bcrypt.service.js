const bcrypt = require('bcrypt');

const saltRounds = 10;

const hash = (plainText) => {
    return bcrypt.hashSync(plainText, saltRounds);
};

const compare = (plainText, hash) => {
    return bcrypt.compareSync(plainText, hash);
};

module.exports = {
    hash,
    compare
};