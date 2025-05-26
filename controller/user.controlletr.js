const { generateToken } = require("../model/token.service");
const userService = require("../service/user.service");

async function registerUser(req,res, next){
    try {
     const user = req.body;
     const result = await userService.register(user);   
     res.sendStatus(201);
    } catch (error) {
        next(error);
    }
}

async function loginUser(req,res,next){
    try {
     const user = req.body;

    const result = await userService.authenticate(user);

    const token = generateToken(result);  
    
    res.status(200).json({
        user:{
            name : result.name,
            email: result.email
        },
        token
    })
    } catch (error) {
        next(error);
    }

}

module.exports = {
    registerUser,
    loginUser
}