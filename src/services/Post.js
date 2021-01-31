import Post from '../models/Posts';
import * as Jwt from 'jsonwebtoken';

class Posts{

    async createpost(token,title,content){
        try{
            const data = Jwt.verify(token, process.env._SIGNATURE);

            const user = {user : data._id};
            const post = await Post.create({title,content,userID:user});

            return {status : 'ok', data : post};

        }catch(err){

            console.log(err);
            if(err)return {status : 'error',error :err.message};
        }
    }
    async readpost(id){

    }
    async allposts(){

    }
    async editpost(id){

    }
    async deletepost(id){

    }
}
module.exports = Posts;