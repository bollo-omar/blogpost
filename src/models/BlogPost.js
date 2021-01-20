import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const PostSchema = new Schema({

});

const PostModel = mongoose.model("PostModel",PostSchema);

module.exports = PostModel;