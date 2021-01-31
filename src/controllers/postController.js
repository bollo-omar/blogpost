import Posts from '../services/Post';

const posts = new Posts();

exports.createpost = (req,res)=>{

    const {title, content, token } = req.body;

     posts.createpost(token,title,content)
    .then(resp=> res.json(resp))
    .catch(err => {
        
        console.log(err);
        if(err) res.json(err);
    });
}