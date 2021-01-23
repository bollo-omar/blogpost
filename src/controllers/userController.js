import AuthService from '../services/Authservice';

const auth = new AuthService();

exports.signin = (req,res)=>{
    const {username,email,password} = req.body;

    auth.createUser(username, email, password)
    .then(resp=> res.json(resp)) 
    .catch(err=>{
        if(err) res.json({message : "Signup failed"});
        console.log(err);
    })

}