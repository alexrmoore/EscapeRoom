import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-room2-locked',
  templateUrl: './room2-locked.component.html',
  styleUrls: ['./room2-locked.component.css']
})
export class Room2LockedComponent implements OnInit {
  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  @HostListener('click', ['$event']) onClick(event) {
    if (event.clientX < 40){
      // console.log('Left Button Clicked (Room 2)');
      this.router.navigateByUrl('/room1');
    }
    if (event.clientY > 400){
      // console.log('Right Button Clicked (Room 2)');
      this.lockedRoomsService.roomLocked[2] = false;
      this.router.navigateByUrl('/room2');
    }
  }
}
