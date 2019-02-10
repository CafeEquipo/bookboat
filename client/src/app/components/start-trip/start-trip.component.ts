import { Component, OnInit } from '@angular/core';
import { StartTripService } from './start-trip.service';

@Component({
  selector: 'app-start-trip',
  templateUrl: './start-trip.component.html',
  styleUrls: ['./start-trip.component.css']
})
export class StartTripComponent implements OnInit {

  constructor(private startTripService:StartTripService) { }

  ngOnInit() {
    this.startTripService.getTest().subscribe(()=> {
      
    })
  }

}
