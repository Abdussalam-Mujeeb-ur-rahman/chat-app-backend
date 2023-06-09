const User = require("../models/userModel");
const bcrypt = require('bcrypt');


module.exports.register = async(req, res, next) => {
    try {
        const {username, email, password} = req.body;

        // check if username exists
        const usernameCheck = await User.findOne({username});
        if (usernameCheck) return res.json({
            status: false,
            message: "Username already exists!"
        });

        // check if email exists
        const emailCheck = await User.findOne({email});
        if (emailCheck) return res.json({
            status: false,
            message: "Email already exists!"
        });

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create and store user into the database
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        //delete user's password
        delete user.password;

        // send successful response to the client
        return res.json({
            status: true,
            user
        });

    } catch (error) {
       next(error);
    }
}


module.exports.login = async(req, res, next) => {
    try {
        const {username, password} = req.body;

        // check if username exists
        const isUser = await User.findOne({username});

        // if user doesn't exist return invalid message
        if (!isUser) return res.json({
            status: false,
            message: "Username or password not correct!. Please input the correct credentials"
        });

        // check if password correct
        const isPasswordCorrect = await bcrypt.compare(password, isUser.password);
        
        // if password is not valid, return invalid message
        if (!isPasswordCorrect) return res.json({
            status: false,
            message: "Username or password not correct!. Please input the correct credentials"
        });

        // delete password from the user object
        delete isUser.password;

        // send successful response to the client
        return res.json({
            status: true,
            isUser
        });

    } catch (error) {
       next(error);
    }
}

module.exports.setAvatar = async(req, res, next) => {
    try {
        const userId = req.params.id;
        const avatarImage = req.body.image
        const userData = await User.findByIdAndUpdate(userId, {
            isAvatarImageSet: true,
            avatarImage,
        }, {new: true});

        return res.json({
            isSet: userData.isAvatarImageSet,
            image: userData.avatarImage,  
        })
    } catch (error) {
        next(error);
    }
}

module.exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({_id: {$ne: req.params.id}}).select(["email", "username", "avatarImage", "_id", ]);
        return res.json(users);
    } catch (error) {
        next(error);
    }
}