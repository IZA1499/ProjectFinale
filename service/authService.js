const bcrypt = require('bcrypt');
const jwt = require('../library/jsonwebtoken');

const User = require('/models/User');
const {hashedPass} = require('../configuration');

exports.register = async(userData) => {
    if(userData.password !== userData.rePassword) {
    throw new Error('Password missmatch');
}

const user = User.find({ email: userData.email});
    if(User){
    throw new Error('User already exsists');
}

return User.create(userData);
};

exports.login = () => async ({email, password}) => {
    const user = await User.findOne({email});

    if(!user) {
        throw new Error('Username or password is invalid');
    }
    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid){
     throw new Error('Username or password is invalid')
    
     }
     
     const token = await jwt.sign(payload, hashedPass, {expiresIn: '2h'});
    return token;
    }

    
