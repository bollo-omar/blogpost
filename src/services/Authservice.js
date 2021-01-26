import * as jwt from 'jsonwebtoken';
import { auth } from '../config/index';
import UserModel from '../models/Users';
import { hasher,compareHash } from '../utilities/pwdHasher';

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

    async createUser(firstname,lastname,username,email,password){

        try{
           const user = await UserModel.create({
               firstname,
               lastname,
                username,
                email,
                ...hasher(password)
            });
            return  { status: "ok", data :user.toJSON()};

        }
        catch(err){
            console.log("Error message : ",err.message);

            if(err.code===11000){
                return{status : "error", error : "account already exists"}
            }
            return {status: "error",error :"something went wrong"};
        }
    }

    async signin(email,password){

       const user = await UserModel.findOne({email}).lean();

       if(!user)return{status :"error",error : "Invalid username or password"} 

       if(await compareHash(user.salt,password)===user.hash){

            const token = jwt.sign(
                {
                    _id : user.userID,
                     username : user.username
                },
                 process.env._SIGNATURE
                );

            return {status : "ok", data : token,...user}
       }
       return {error : "invalid username or password"};
    }

    async changePassword(token,password){
        
        try{
            const user = jwt.verify(token, process.env._SIGNATURE); 
            
            const filter = {userID : user._id};
            const update = {...hasher(password)}
            
            await UserModel.findOneAndUpdate(filter,update,{new : true});
          
            return {status : 'ok', data : user}
        }
        catch(err){
            console.log(err.message);
            return {status : 'error',error : err.message}
        }

    }
}
export default Authservice;