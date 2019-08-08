const User = require('../models/User');
const bcrypt = require('bcrypt');
const {generate} = require('../helpers/Token');

exports.Signup = async (req, args) =>{
    try {
        const newUser = new User({
            username: args.username,
            password: bcrypt.hashSync(args.password, 11),
            email: args.email
        });
        const create = await newUser.save();
        return create;
    } catch (error) {
        throw new Error(error)
    }
}

exports.Signin = async (req,args) =>{
    try {
        const { userInfo } = req;
        const compare = bcrypt.compareSync(args.password, userInfo.password);
        if (!compare) throw new Error('The email and password you entered did not match our records.');
        const payload = {
           username: userInfo.username,
           id: userInfo._id
        };
        //generate token
        const token = await generate(payload);
        const data = { token, message:`Welcome again ${userInfo.username}`};
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

//currentUser
exports.currentUser = async(req, args) => {
    const {id}= req.user;
    try {
       const find = await User.findById(id);
       return find; 
    } catch (error) {
        throw new Error(error);
    }
}