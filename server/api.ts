const Keycloak = require('keycloak-connect')
import { Router, Request, Response } from 'express';
import { Booking } from './model/newBooking'
import { UserService } from './service/userService'

export class Api{ 

    public static apiRoutes(keycloak:any) {

        const router: Router = Router()

        router.post('/bookboat',(req,res) => {
            const newBooking:Booking = req.body
            res.send(newBooking)
        })

        router.post('/newUser',(req,res) => {
            const userEmail = req.body.email
            UserService.createUser(userEmail).then((savedBacked:any)=>{
                res.sendStatus(200)
                console.log(savedBacked)
            }).catch(() => 
                res.sendStatus(500)
            )
        })

        router.get('/test',(req,res) => {
            res.send("back")
        })

        return router

    }

}