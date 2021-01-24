import * as express from 'express'
import path from 'path';
import CORS from 'cors';
import initDBServer from './db';
import router from '../routes/authRoutes';
//import router from '../Routes/accounts.route';

module.exports = (app)=>{

    initDBServer();
    app.use('/',express.static(path.join(__dirname, '../../static')));
    app.use(express.urlencoded({extended : true})); 
    app.use(express.json());
    app.use(CORS());
    app.use(router);   

    return app;
};