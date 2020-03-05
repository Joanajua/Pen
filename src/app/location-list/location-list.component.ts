import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  locationList: Location[]
  selectedLocation: Location

  constructor() {
    this.locationList = [{
      penList: ["Bic",
        "Rotring",
        "Cool"],
      city: "Gloucester",
      postCode: "GL1 4HK",
    },

    {
      penList: ["Bic",
        "Rotring",
        "Cool"],
      city: "London",
      postCode: "LO1 322",
    },
    ]
    this.selectedLocation = this.locationList[0]
  }

  ngOnInit(): void {
  }
  onClick(location: Location): void {
    this.selectedLocation = location
  }

}
