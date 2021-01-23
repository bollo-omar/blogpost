import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
        type: String
    },
    password : {
        type : String,
        required : true
    },
    userID : {
        type : Schema.ObjectId,
        auto : true
    }
});

UserSchema.pre('save',function(next){
    if(this.password && this.isModified('password')){
        this.password = bcrypt.hash(this.password, 10);
    }
    next();
});

const UserModel = mongoose.model('User',UserSchema);

export default UserModel;

