import { Booking } from "../modelTS/newBooking";
import express = require("express");
import { BookingService } from "../service/bookingService";

export namespace BookingApi {

    export function userApi(){
        const router:express.Router = express.Router()

        router.get('/getBookedDates',(req,res)=>{
            const startDate = req.params.startDate
            const endDate = req.params.endDate
            const boatId = req.params.boatId
            BookingService.findAll([
                ['startDate.greaterOrEqualThan',startDate],
                ['endDate.lessOrEqualThan',endDate],
                ['boatId.equals',boatId]
            ])
        })

        return router
    }

    export function createBooking(booking:Booking){
        //TODO exception when id
    }

    export function updateBooking(booking:Booking){
        //exception when no id
    }

    export function getAllBookings(){

    }

    export function getBooking(id:number){}

    export function deleteBooking(id:number){}

}