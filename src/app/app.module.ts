import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LocationListComponent } from './location-list/location-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationDetailsComponent,
    LocationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
