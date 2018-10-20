import * as bodyParser from 'body-parser'
import express = require('express')
import Keycloak = require('keycloak-connect')
import session = require('express-session')
import { Api } from './api'
import db = require('./models')

export class App {
    
    app: express.Application
    keycloak:any

    constructor() {
        this.app = express()
        this.keycloak = this.middleWare()
        if(!process.env.DEV){
            this.addKeycloak()
          }else{//fake keycloak middleware
            console.log("Running in Dev Mode")
            this.keycloak = {protect :function () {
              return (req:express.Request, res:express.Response, next:any) => {
                req.kauth = {grant:{access_token:{content:{preferred_username:"tester"}}}}
                next()}
            } }
          }
        this.mountRoutes()
        this.sequelizeInit()
    }

    mountRoutes() {
        this.app.use('/api', Api.apiRoutes(this.keycloak));
    }

    private addKeycloak(){
        const memoryStore = new session.MemoryStore();
        this.app.use(session({
            secret: process.env.SECRET as string,
            resave: false,
            saveUninitialized: true,
            store: memoryStore
        }));
        this.keycloak = new Keycloak({ store: memoryStore });
        this.app.use(this.keycloak.middleware())
      }

    private middleWare(): void {
       
        this.app.use(this.allowCrossDomain);

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use(function (err:any, req:express.Request, res:express.Response, next:any) {
            if (err.name === 'UnauthorizedError') {
                res.status(401);
                res.json({ "message": err.name + ": " + err.message })
            }
        })

    }

    private sequelizeInit(){
      db.sequelize.sync().then(() => {
        console.log("sequelize inited")
      })
    }

// ## CORS middleware
  // 
  // see: http://stackoverflow.com/questions/7067966/how-to-allow-cors-in-express-nodejs
  private allowCrossDomain = function (req:any, res:any, next:any) {
    const allowedOrigins = ['http://localhost:4200', 'http://localhost:4002'];
    const origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
      res.header('Access-Control-Allow-Origin', origin)
    }
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next()
    }
  };
}
