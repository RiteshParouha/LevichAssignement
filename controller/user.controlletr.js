const userService = require("../service/user.service");

async function registerUser(req,res, next){
    try {
     const user = req.user;
     const result = await userService.register(user);   
     res.sendStatus(201);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    registerUser
}