import { BookingService } from '../../service/bookingService';
import { expect } from 'chai';
import * as db from '../../models'
import { Booking } from '../../modelTS/newBooking';
let boatId: number
let userId: number
before((done) => {
  //fill db
  const mooring$ = db.sequelize.models.Mooring.create({
    name: 'Europahafen',
    streetAdress: 'Konsul-Smidt-Straße, 28217 Bremen',
    latitude: 53.0884347,
    longitude: 8.7765903
  }).then((mooring: any) => {
    db.sequelize.models.User.create({
      emailaddress: 'pk@abc.com',
      familyname: 'k',
      firstName: 'p'
    }).then((user: any) => {
      db.sequelize.models.Boatman.create({
        phone: '110',
        UserId: user.id
      }).then((boatman: any) => {
        db.sequelize.models.Boat.create({
          name: 'zora',
          MooringId: mooring.id,
          BoatmanId: boatman.id
        }).then((boat: any) => {
          userId = user.id
          boatId = boat.id
          db.sequelize.models.Booking.create({
            startDate: new Date(2018, 11, 24, 10, 33, 30, 0),
            endDate: new Date(2018, 11, 24, 17, 0, 0, 0),
            comment: 'Ich bringe alle meine Freunde mit skrrt skrrt',
            UserId: user.id,
            BoatId: boat.id
          }).then(() => {
            done()
          })
        })
      })
    })
  })
})
after(() => {
  db.sequelize.models.Booking.destroy({
    where: {},
  }).then(() => {
    db.sequelize.models.Boat.destroy({
      where: {},
    })
  }).then(() => {
    db.sequelize.models.Boatman.destroy({
      where: {},
    })
  }).then(() => {
    db.sequelize.models.User.destroy({
      where: {},
    })
  }).then(() => {
    db.sequelize.models.Mooring.destroy({
      where: {},
    }).then(() => {
      db.sequelize.close()
    })
  })
});
describe('Test booking service', () => {

  it('should get the booking out that I put in', (done) => {
    const testBooking: Booking = {
      BoatId: boatId,
      UserId: userId,
      comment: 'mache tour mit Toni und Sabine',
      startDate: new Date(2018, 11, 24, 10, 33, 30, 0),
      endDate: new Date(2018, 11, 24, 18, 0, 0, 0),
      approvedByBoatMan:false,
      isCanceled:false
    }
    BookingService.save(testBooking).then((id: number) => {
      expect(id).to.be.a('number')
      expect(id % 1).to.be.equal(0)
      BookingService.findOne(id).then(
        (booking: Booking) => {
          expect(booking.BoatId).equals(boatId)
          expect(booking.comment).equals('mache tour mit Toni und Sabine')
          booking.comment = 'mache tour mit Toni und Sabine skkrrrt'
          BookingService.update(booking).then((updateBooking) => {
            expect(booking.comment).equals('mache tour mit Toni und Sabine skkrrrt')
            BookingService.deleteOne(id).then((delt: number) => {
              expect(delt).to.be.equal(1)
              done()
            })
          })
        })
    })
  });

  it('Test filter for findAll', async () => {
    const testBooking1: Booking = {
      BoatId: boatId,
      UserId: userId,
      comment: 'one',
      startDate: new Date(2018, 11, 24, 10, 33, 30, 0),
      endDate: new Date(2018, 11, 24, 18, 0, 0, 0),
      approvedByBoatMan:false,
      isCanceled:false
    }
  
    const testBooking2: Booking = {
      BoatId: boatId,
      UserId: userId,
      comment: 'two',
      startDate: new Date(2018, 11, 28, 10, 33, 30, 0),
      endDate: new Date(2018, 11, 28, 18, 0, 0, 0),
      approvedByBoatMan:false,
      isCanceled:false
    }
  
    const id1 = await BookingService.save(testBooking1)
    const id2 = await BookingService.save(testBooking2)
  
    let query = [
       ["comment.equals", "one"]
    ]
  
    const resp = await BookingService.findAll(query)
    expect(resp[0].comment).equals('one')
  
    query = [
      ["comment.equals", "one,two"],
    ]

    const resp1 = await BookingService.findAll(query)
    expect(resp1[0].comment).equals('one')
    expect(resp1[1].comment).equals('two')

    query = [
      ["comment.contains", "one,%w%"],
    ]

    expect(resp1[0].comment).equals('one')
    expect(resp1[1].comment).equals('two')

    query = [
      ["startDate.greaterOrEqualThan", "2018-11-26 11:55 +01"]
    ]

    const resp2 = await BookingService.findAll(query)
    expect(resp2[0].startDate.toString()).equals('Mon Dec 24 2018 10:33:30 GMT+0000 (UTC)')


    query = [
      ["startDate.lessOrEqualThan", "2019-12-26 11:55 +01"]
    ]
    
    const resp3 = await BookingService.findAll(query)

    expect(resp3[0].startDate.toString()).equals('Mon Dec 24 2018 10:33:30 GMT+0000 (UTC)')

  });
  

});
