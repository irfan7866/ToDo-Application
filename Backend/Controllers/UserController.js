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

// User Log out
exports.logoutUser = async(req, res) => {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        });

        res.status(200).json({
            success:true,
            message:"Logged out",
        });
    }
    catch(error) {
        res.status(500).json({message: `Something went wrong`, error});
    }
}

// User Details
exports.getUserDetail = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if(!user) 
            return res.status(404).json({message: `User not found`});
        
        res.status(200).json({user});
    }
    catch(error) {
        res.status(500).json({message: `Something went wrong`, error});
    }
}