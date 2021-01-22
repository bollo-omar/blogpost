import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FollowerSchema = new Schema({

});

const FollowersModel = mongoose.model("Follower",FollowerSchema);

module.exports = FollowersModel;