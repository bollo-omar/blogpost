import { server } from './Config/index';

import express from 'express';

async function startServer(){
     const app = express();
     
     require('./config/loader')(app);
     
     await app.listen(server.port, () => {
          console.log(`App running on port : ${server.port}. Press CTRL + C to stop`);         
     });

}

startServer();