import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    content : {
        type :String,
        required : true
    },
    createdAt : Date,
    updatedAt : Date,
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User' 
    },
    likeCounter : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Like'
    }],       
    comment : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }
    ]
});

PostSchema.pre('save', function(next){
    this.updatedAt = Date.now();

    if(!this.createdAt)this.createdAt=Date.now();
    next();
});

const Post = mongoose.model('Post',PostSchema);

module.exports = Post;