import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StartTripService } from '../start-trip/start-trip.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css']
})
export class NewBookingComponent implements OnInit {

  myForm

  constructor(private startTripService:StartTripService) {
    this.myForm = new FormGroup({
      boatName: new FormControl(null, [Validators.required]),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required])
    })
  }
  submitForm(value) {
    console.log(value);
  }



  ngOnInit() {
    this.startTripService.getTest().subscribe(()=> {
      console.log("test request")
    })
  }

}
