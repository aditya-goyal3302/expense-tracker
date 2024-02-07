const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: String,
        default: ""
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    currentbalance: {
        type: Object,
        default: {
            income: 0,
            expenses: 0,
            savings: 0
        }
    },
    e_cats:{
        type: Object,
        default: {
            home:["water","electricity","gas","rent","food"],
            leisure:["cinema","restaurant","holiday","transport"],
            other:[]
        }
    },
    transactions: {
        type: Array,
        default: [
            {
                date: Date,
                category: String,
                amount: Number,
                description: String
            }
        ]
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;