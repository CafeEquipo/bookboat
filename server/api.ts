const Keycloak = require('keycloak-connect')
import { Router, Request, Response } from 'express';
import {NewBooking } from './model/new-booking'

export class Api{ 

    public static apiRoutes(keycloak:any) {

        const router: Router = Router()

        router.post('/bookboat',(req,res) => {
            const newBooking:NewBooking = req.body
            res.send(newBooking)
        })

        return router

    }

}