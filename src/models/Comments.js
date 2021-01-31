import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    content : {
        type : String,
        default : null
    },
    createdAt : Date,
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Post'
    }
    
});

CommentSchema.pre('save',function(){
   
    if(!this.createdAt)this.createdAt=Date.now();
    next();
})

const Comment = mongoose.model('Comment',CommentSchema);

module.exports = Comment;