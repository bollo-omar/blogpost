import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname : {
        type : String,
        required : true,
        trim : 1
    },
    lastname : {
        type : String,
        required : true,
        trim : 1
    },
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
    hash : {
        type: String,
        required : true
    },
    salt : {
        type : String,
        required : true
    },
    userID : {
        type : Schema.ObjectId,
        auto : true
    },
    createdAt : Date,
    updatedAt : Date,
    post : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Post'
        }
    ],
    like : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Like'
        }
    ],
    comment : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }
    ]
});

UserSchema.pre('save',function(next){
   
    this.updatedAt = Date.now();

    if(!this.createdAt)this.createdAt=Date.now();
    next();
});

const UserModel = mongoose.model('User',UserSchema);

export default UserModel;

