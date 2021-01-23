import  mongoose from 'mongoose';

const initDBServer = async ()=>{

    try{
        await mongoose.connect(process.env._DBURI,{
            useNewUrlParser : true,
            useUnifiedTopology: true
        });
        console.log({message:"DB connected successfully..."});
    }
    catch(err){
        
        if (err.name === 'MongoError') {
            
            console.log({ message: err.message });

        }else{

            console.log({message : "connection failed, check your configuration or internet connection"});
        }
    }
}

module.exports = initDBServer;