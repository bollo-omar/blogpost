import * as express from 'express'
import CORS from 'cors';
import initDBServer from './db';
import router from '../routes/authRoutes';
//import router from '../Routes/accounts.route';

module.exports = (app)=>{

    initDBServer();

    app.use(express.urlencoded({extended : true}));
    app.use(express.json());
    app.use(CORS());
    app.use(router);

   /* app.use((err, req, res, next)=>{

        if (typeof (err) === 'string') {
            
           
            res.status(400).json({ message: err });
        }
        else if (err.name === 'ValidationError') {
            
            res.status(400).json({ message: err.message });
        }
    
        else if (err.name === 'UnauthorizedError') {
            
             res.status(401).json({ message: 'Invalid Token' });
        }
        else {
            res.status(500).json({ message: err.message });
        }
    });*/

    //other middlewares
    //app.use(router);

    return app;
};