export interface Booking{
 id?:number,
 BoatId: number,
 UserId: number,
 startDate:Date,
 endDate:Date,
 comment:string,
 approvedByBoatMan:boolean,
 isCanceled:boolean
}