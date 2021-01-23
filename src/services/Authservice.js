import * as jwt from 'jsonwebtoken';
import { auth } from '../config/index';
import UserModel from '../models/Users';
class Authservice{

    generateToken(user){
        const data = {
            _id : user.userID,
            name : user.username,
            email : user.email
        }

        const signature = auth.SECRET;
        const expiration  = "3h";

        return jwt.sign(
            {
                data
            },
            signature,
            {
                algorithm: 'HS256',
                expiresIn:expiration
            }
        );
    
    }
    async createUser(username,email,password){

        try{
           const user = await UserModel.create({
                username,
                email,
                password
            });
            return user.toJSON();

        }
        catch(err){
            console.log(err);
        }
    }
    async signin(username,password){

    }
}
export default Authservice;