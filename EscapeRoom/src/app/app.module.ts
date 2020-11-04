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
import { ReflectionRoom1Component } from './reflection-room1/reflection-room1.component';
import { ReflectionRoom2LockedComponent } from './reflection-room2-locked/reflection-room2-locked.component';
import { ReflectionRoom2Component } from './reflection-room2/reflection-room2.component';
import { ReflectionRoom3Component } from './reflection-room3/reflection-room3.component';
import { ReflectionRoom4Component } from './reflection-room4/reflection-room4.component';
import { InterferenceRoom1Component } from './interference-room1/interference-room1.component';
import { InterferenceRoom2Component } from './interference-room2/interference-room2.component';
import { InterferenceRoom4Component } from './interference-room4/interference-room4.component';
import { InterferenceRoom5Component } from './interference-room5/interference-room5.component';
import { InterferenceRoom3Component } from './interference-room3/interference-room3.component';
import { InterferenceRoom3LockedComponent } from './interference-room3-locked/interference-room3-locked.component';
import { PhotoelectricRoom1Component } from './photoelectric-room1/photoelectric-room1.component';
import { PhotoelectricRoom2Component } from './photoelectric-room2/photoelectric-room2.component';
import { PhotoelectricRoom3Component } from './photoelectric-room3/photoelectric-room3.component';
import { PhotoelectricRoom3LockedComponent } from './photoelectric-room3-locked/photoelectric-room3-locked.component';
import { PhotoelectricRoom4Component } from './photoelectric-room4/photoelectric-room4.component';
import { OverallRoom1Component } from './overall-room1/overall-room1.component';
import { OverallRoom1LockedComponent } from './overall-room1-locked/overall-room1-locked.component';
import { CompleteRoomComponent } from './complete-room/complete-room.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'endscreen', component: EndscreenComponent},
  { path: 'room1', component: Room1Component },
  { path: 'room2', component: Room2Component },
  { path: 'room2locked', component: Room2LockedComponent },
  { path: 'room3', component: Room3Component },
  { path: 'room3locked', component: Room3LockedComponent },
  { path: 'room4', component: Room4Component },

  { path: 'reflection_room1', component: ReflectionRoom1Component },
  { path: 'reflection_room2', component: ReflectionRoom2Component },
  { path: 'reflection_room2_locked', component: ReflectionRoom2LockedComponent },
  { path: 'reflection_room3', component: ReflectionRoom3Component },
  { path: 'reflection_room4', component: ReflectionRoom4Component },

  { path: 'interference_room1', component: InterferenceRoom1Component},
  { path: 'interference_room2', component: InterferenceRoom2Component},
  { path: 'interference_room3', component: InterferenceRoom3Component},
  { path: 'interference_room3_locked', component: InterferenceRoom3LockedComponent},
  { path: 'interference_room4', component: InterferenceRoom4Component},
  { path: 'interference_room5', component: InterferenceRoom5Component},

  { path: 'photoelectric_room1', component: PhotoelectricRoom1Component},
  { path: 'photoelectric_room2', component: PhotoelectricRoom2Component},
  { path: 'photoelectric_room3', component: PhotoelectricRoom3Component},
  { path: 'photoelectric_room3_locked', component: PhotoelectricRoom3LockedComponent},
  { path: 'photoelectric_room4', component: PhotoelectricRoom4Component},

  { path: 'overall_room1', component: OverallRoom1Component},
  { path: 'overall_room1_locked', component: OverallRoom1LockedComponent},

  { path: 'complete_room', component: CompleteRoomComponent}
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
    EndscreenComponent,
    ReflectionRoom1Component,
    ReflectionRoom2LockedComponent,
    ReflectionRoom2Component,
    ReflectionRoom3Component,
    ReflectionRoom4Component,
    InterferenceRoom1Component,
    InterferenceRoom2Component,
    InterferenceRoom4Component,
    InterferenceRoom3Component,
    InterferenceRoom3LockedComponent,
    PhotoelectricRoom1Component,
    PhotoelectricRoom2Component,
    PhotoelectricRoom3Component,
    PhotoelectricRoom3LockedComponent,
    PhotoelectricRoom4Component,
    InterferenceRoom5Component,
    OverallRoom1Component,
    OverallRoom1LockedComponent,
    CompleteRoomComponent
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
