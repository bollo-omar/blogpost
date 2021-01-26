import mongoose from 'mongoose';

const LikeSchema = new mongoose.Schema({
    counter : {
        type : Number,
        default : 0 
    },
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Post'
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
});

const Like = mongoose.model('Like',LikeSchema);

module.exports = Like;