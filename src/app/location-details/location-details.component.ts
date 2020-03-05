import { Component, OnInit } from '@angular/core';
import { PenLocation } from '../pen-location';


@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  location: PenLocation = {
    penList: ["Bic",
      "Rotring",
      "Cool"],
    city: "Gloucester",
    postCode: "GL1 4HK"
  }

  constructor() { }

  ngOnInit(): void {
  }


}
