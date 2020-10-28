import { Component, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) {  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public PhysicsPathStart(){
    this.router.navigateByUrl('/reflection_room1');
  }

  // tslint:disable-next-line:typedef
  @HostListener('click', ['$event']) onClick(event) {
    // console.log(event.clientX);
    // console.log(event.clientY);
    if (event.clientX > 260 && event.clientX < 570){
      if (event.clientY > 230 && event.clientY < 385){
        // console.log('Start Button Clicked (Start)');
        this.lockedRoomsService.roomLocked = [false, false, true, true];
        this.router.navigateByUrl('/room1');
      }
    }
  }

}
