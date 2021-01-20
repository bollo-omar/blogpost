import mongoose from 'mongoose';
import UserModel from '../models/UserModel';


class UserService{

    async signup(username,email,password){

        await UserModel.create({
            username,
            email,
            password
        }).

        return userData;

    }
    async signin(username,password){

    }
    async editAccount(){

    }


}

export default User;