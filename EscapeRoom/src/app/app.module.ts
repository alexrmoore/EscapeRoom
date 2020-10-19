import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LockedRoomsService } from './locked-rooms.service';
import { Room1Component } from './room1/room1.component';
import { Room2Component } from './room2/room2.component';
import { Room2LockedComponent } from './room2-locked/room2-locked.component';
import { Room3Component } from './room3/room3.component';
import { Room3LockedComponent } from './room3-locked/room3-locked.component';
import { Room4Component } from './room4/room4.component';
import { EndscreenComponent } from './endscreen/endscreen.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'endscreen', component: EndscreenComponent},
  { path: 'room1', component: Room1Component },
  { path: 'room2', component: Room2Component },
  { path: 'room2locked', component: Room2LockedComponent },
  { path: 'room3', component: Room3Component },
  { path: 'room3locked', component: Room3LockedComponent },
  { path: 'room4', component: Room4Component }
];

@NgModule({
  declarations: [
    AppComponent,
    Room1Component,
    Room2Component,
    Room3Component,
    HomeComponent,
    Room2LockedComponent,
    Room4Component,
    Room3LockedComponent,
    EndscreenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [LockedRoomsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
