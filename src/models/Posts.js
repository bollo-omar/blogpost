import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : 1
    },
    postedAt : Date,
    postBody : {
        type : String,
        required : true,
        trim : 1
    },
    postedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    Comments : [{
        comment : String,
        commentedAt : Date,
        postedBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    }],
    likeCounter : [{
        counter : Number,
        default : 0,
        likedBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    }]
});

const PostModel = mongoose.model('Post',PostSchema);

module.exports = PostModel;