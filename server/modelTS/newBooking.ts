import { User } from "./user";
import { Boat } from "./boat";

export interface Booking{
 boatId:Boat,
 user: User,
 startDate:Date,
 endDate:Date,
 comment:string,
 clubMembers:string[],
 guests:string[] 
}