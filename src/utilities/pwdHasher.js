import Crypto from 'crypto';

const hasher = (password)=>{

    const salt = Crypto.randomBytes(Math.ceil(16/2)).toString('hex').slice(0,16);

    let hash = Crypto.createHmac('sha512',salt);
    hash.update(password);

    const value = hash.digest('hex');

    return{
        salt : salt,
        hash : value
    }
}

const compareHash = (salt,password)=>{
    
    const hash = Crypto.createHmac('sha512',salt).update(password);

    return hash.digest('hex');
}
 
module.exports = { hasher, compareHash };  