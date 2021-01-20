import  mongoose from 'mongoose';

const pwd = process.env._PASSWORD;
const uri = "mongodb+srv://user_001:"+pwd+"@blogpost-east.5bgod.mongodb.net/BlogDB?retryWrites=true&w=majority";

const initDBServer = async ()=>{

    try{
        await mongoose.connect(uri,{
            useNewUrlParser : true,
            useUnifiedTopology: true
        });
        console.log({message:"DB connected successfully"});
    }
    catch(err){
        
        if (err.name === 'MongoError') {
            
            console.log({ message: err.message });

        }else{

            console.log(err);
        }
    }
}

module.exports = initDBServer;