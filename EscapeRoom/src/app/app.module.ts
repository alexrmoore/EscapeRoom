import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Room1Component } from './room1/room1.component';
import { Room2Component } from './room2/room2.component';
import { Room3Component } from './room3/room3.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'room1', component: Room1Component },
  { path: 'room2', component: Room2Component },
  { path: 'room3', component: Room3Component }
];

@NgModule({
  declarations: [
    AppComponent,
    Room1Component,
    Room2Component,
    Room3Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
