import * as bodyParser from 'body-parser'
import express = require('express')
import Keycloak = require('keycloak-connect')
import session = require('express-session')
import db = require('./models')
import { BookingApi } from './web/bookingApi'

export class App {
    
    app: express.Application
    keycloak:any

    constructor() {
        this.app = express()
        this.keycloak = this.middleWare()        
        this.addKeycloak()
        this.mountRoutes()
        this.sequelizeInit()
    }

    mountRoutes() {
        //this.app.use('/api', Api.apiRoutes(this.keycloak));
        // const adminRouter: express.Router = express.Router();
        // adminRouter.use('/admin',Keycloak.protect('realm:admin'))


        // const boatmanRouter: express.Router = express.Router();
        // boatmanRouter.use('/boatman',Keycloak.protect('realm:boatman'))

        const userRouter: express.Router = express.Router();
        userRouter.use('/user',Keycloak.protect('realm:user'))
        userRouter.use('/user',BookingApi.userApi)
        this.app.use('/api/',userRouter)

        // const routerPublic:Router = Router();
        // routerPublic.use('/public',PublicApi.publicRoutes())
        // this.app.use('/api/', routerAdmin)
        // this.app.use('/api/',routerPublic)
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
