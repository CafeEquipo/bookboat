const Keycloak = require('keycloak-connect')
import { Router, Request, Response } from 'express';

export class Api{ 

    public static apiRoutes(keycloak:any) {

        const router: Router = Router()

        router.get('/userjson',keycloak.protect(),(req,res) => {
            res.json(
                {
                    greetings:"this is a secret message! Only for a user!"
                }
            )
        })

        router.get('/adminjson',keycloak.protect('realm:admin'),(req,res) => {
            res.json(
                {
                    greetings:"This is an admin message. Only for an admin"
                }
            )
        })

        router.get('/json',(req,res) => {
            res.json(
                {
                    greetings:"This isn't a secret message."
                }
            )
        })

        return router

    }

}