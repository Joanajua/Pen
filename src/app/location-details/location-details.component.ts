import { AfterViewInit, Component, OnInit, Input } from '@angular/core';
import { Location } from '../location';
import { LocationListComponent } from "../location-list/location-list.component";

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  @Input() selectedLocation: Location

  // @ViewChild(LocationListComponent) child

  location: Location = {
    penList: ["Bic",
      "Rotring",
      "Cool"],
    city: "Gloucester",
    postCode: "GL1 4HK",
  }

  constructor() { }

  ngOnInit(): void {
  }


  // ngAfterViewInit() {
  //   this.selectedLocation = this.child.location
  // }
}
