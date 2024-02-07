const mongoose = require('mongoose');
const User = require('../Models/user');
const bcrypt = require('bcrypt');


exports.signup = async (req, res) => {
    const data = JSON.parse(req.body.body);
    const hashedpass = await bcrypt.hash(data.password, 10);
    const user = new User({
        name: data.name,
        email: data.email,
        password: hashedpass    
    });
    const result = await user.save();
    console.log(result);
    if (!result) {
        res.send("Error in creating user");
    }
    else
        res.send("User created");
}

exports.login = async (req, res) => {
    const data = JSON.parse(req.body.body);
    const user = await User
        .findOne({ email: data.email })
    if (!user) {
        return res.send({code:2,e:"Invalid email or password"});
    }
    const check = await bcrypt.compare(data.password, user.password)
    if (!check) {
        return res.send({code:2,e:"Invalid email or password"});
    }
    else{
        req.session.user = user;
        req.session.isAuth = true;
        const userdata = {
            id:user._id,
            name:user.name,
            email:user.email,
            currentbalance:user.currentbalance,
            e_cats:user.e_cats,
            transactions:user.transactions,
            image:user.image
        }
        res.send({code:1,e:"Logged in",data:userdata});
    }
}

exports.isauth = async (req, res) => {
    // if(req.user.isAuth){
        res.send(true);
    // }
    // else{
    //     res.send(false);
    // }
}

exports.verify = async (req, res,next) => {
    // if(req.user.isauth){
        next();
    // }
    // else{
    //     console.log("not verified");
    // }
}