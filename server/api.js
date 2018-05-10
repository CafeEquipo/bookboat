const Keycloak = require('keycloak-connect');
const express = require('express');

module.exports = class Api{ 

    apiRoutes(keycloak) {
        const router = express.Router();

        router.get('/userjson',keycloak.protect(),(req,res) => {
        //router.get('/secretjson',(req:Request,res:Response) => {
            res.json(
                {
                    greetings:"this is a secret message! Only for a user!"
                }
            )
        })

        router.get('/adminjson',keycloak.protect('realm:admin'),(req,res) => {
        //router.get('/adminjson',(req:Request,res:Response) => {
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