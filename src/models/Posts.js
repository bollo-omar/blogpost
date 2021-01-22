import mongoose from 'mongoose';

const Post = mongoose.model('Post',new Schema({
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
    Comments : {
        comment : String,
        commentedAt : Date,
        postedBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        },
        likeCounter : {
            counter : Number,
            likedBy : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'User'
            }
        }
    },
    likeCounter : {
        counter : Number,
        likedBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    }
}));

module.exports = Post;