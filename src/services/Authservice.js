import * as jwt from 'jsonwebtoken';

class Authservice{

    #generateToken(user){
        const data = {
            _id : user.ID,
            name : user.username,
            email : user.email
        }
    
    }
}