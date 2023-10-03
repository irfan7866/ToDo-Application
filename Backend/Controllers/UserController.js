const User = require("../Models/UserSchema");
const session = require('session');

// User Registeration
exports.registerUser = async(req, res) => {
    try {
        const {name, username, password} = req.body;

        const existingUser = await User.findOne({username});

        if(existingUser) {
            return res.status(409).json({message: `User already registered`});
        }

        const user = await User.create({
            name : name, 
            username : username, 
            password : password
        });

        return res.status(200).json({user});
    }
    catch(error) {
        return res.status(500).json({message: error})
    }
}

// User Login
exports.loginUser = async(req, res) => {
    try {
        const {username, password} = req.body;

        if(!username || !password)
            return res.status(401).json({message: `Please enter email and password`});

        const user = await User.findOne({username});

        if(!user || user.password !== password) 
            return res.status(401).json({message: `Invalid email or password`});

        res.status(200).json({user});
    } catch(error) {
        res.status(500).json({message: `Something went wrong`, error});
    }
}
