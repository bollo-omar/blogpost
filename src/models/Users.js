import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User = mongoose.model('User',new mongoose.Schema({
    username : {
        type: String,
        required : true,
        unique : 1,
        trim : true
    },
    email : {
        type : String,
        required: true,
        unique :  1,
        trim : true
    },
    password : {
        type : String,
        required : true
    },
    userID : Schema.Types.ObjectId
}));

module.exports = User;

