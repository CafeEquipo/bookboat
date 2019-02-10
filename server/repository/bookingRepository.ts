import { Booking } from "../modelTS/newBooking";
import db = require('../models')

export namespace BookingRepository {
    export async function save(booking: Booking) {
        const newBooking = await db.sequelize.models.Booking.create(
            booking
        )
        return newBooking.id
    }

    export function findAll(query:any) {
        return db.sequelize.models.Booking.findAll({
            where: query
        })
    }

    export async function update(booking: Booking) {
        return await db.sequelize.models.Booking.update(
            { booking },
            { where: { id: booking.id } }
        )
    }

    export async function findOne(id: number) {
        return await db.sequelize.models.Booking.findOne({
            where: { id: id }
        })
    }

    export async function deleteOne(id: number) {
        return await db.sequelize.models.Booking.destroy({
            where: { id: id }
        })
    }
}