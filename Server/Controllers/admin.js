const mongoose = require('mongoose');
const { User } = require('../Models/user');



exports.postgetdata = async (req, res) => {
    
    const users = await User.findOne();
    res.send(users);
    
}




