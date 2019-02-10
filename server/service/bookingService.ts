import { Booking } from "../modelTS/newBooking";
import { BookingRepository } from "../repository/bookingRepository";
import db = require('../models');
const Op = db.Sequelize.Op;

const _booking: Booking = {
    id: 1,
    comment: '',
    startDate: new Date(),
    endDate: new Date(),
    BoatId: 1,
    UserId: 1,
    approvedByBoatMan:false,
    isCanceled:false
}

const _bookingKeys = Object.keys(_booking)

export namespace BookingService {
    export function save(booking: Booking) {
        return BookingRepository.save(booking)
    }

    export function findAll(queries: any[]) {
        const query = _queryBuilder(queries)
        return BookingRepository.findAll(query)
    }

    export async function update(booking: Booking) {
        return BookingRepository.update(booking)
    }

    export function findOne(id: number) {
        return BookingRepository.findOne(id)
    }

    export function deleteOne(id: number) {
        return BookingRepository.deleteOne(id)
    }

    function _queryBuilder(queryValue: string[][]) {
        let seqQuery: any = {}
        for (let query of queryValue) {
            const splittedFilter = query[0].split('.')
            const splittedValue = query[1].split(',')
            if (splittedFilter.length != 2) {
                break
            }
            if (splittedValue.length < 1) {
                break
            }
            //is it a valid property of Booking
            if (_bookingKeys.indexOf(splittedFilter[0]) < 0) {
                break
            }
            seqQuery[splittedFilter[0]] = {}
            if (splittedFilter[1] == "equals") {
                seqQuery[splittedFilter[0]] = {
                    [Op.or]: splittedValue
                }
            }
            if (splittedFilter[1] == "contains") {
                seqQuery[splittedFilter[0]] = {
                    [Op.iLike]: splittedValue
                }
            }
            if (splittedFilter[1] == "greaterOrEqualThan") {
                seqQuery[splittedFilter[0]] = {
                    [Op.gte]: splittedValue
                }
            }
            if (splittedFilter[1] == "lessOrEqualThan") {
                seqQuery[splittedFilter[0]] = {
                    [Op.lte]: splittedValue
                }
            }
        }
        return seqQuery
    }
}