import AuthService from '../services/Authservice';

const auth = new AuthService();

exports.signup = (req,res)=>{
    const {firstname,lastname,username,email,password} = req.body;

    auth.createUser(firstname,lastname,username, email, password)
    .then(resp=> res.json(resp)) 
    .catch(err=>{
        if(err) res.json({message : "Signup failed"});
        console.log(err);
    })

}
exports.signin = (req,res)=>{

    const {email,password} = req.body;

    auth.signin(email, password)
    .then(resp=> res.json(resp))
    .catch(err=>{
        if(err)  res.json({message : "singin failed"});
        console.log(err)
    });

}
exports.changePassword = (req,res)=>{

    const { token,password } = req.body;

    auth.changePassword(token,password)
    .then(resp=>{ res.json(resp)})
    .catch(err=>{
        console.log(err.message);
    });
}