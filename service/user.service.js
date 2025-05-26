const User = require("../model/user.model");

const register = (user)=>{
    if(!user){
        return null;
    }
    return User.create(user);
}

module.exports = {
    register
}