import { Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-interference-room3-locked',
  templateUrl: './interference-room3-locked.component.html',
  styleUrls: ['./interference-room3-locked.component.css']
})
export class InterferenceRoom3LockedComponent implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onUpClick(){
    this.router.navigateByUrl('/interference_room1');
  }

  // tslint:disable-next-line:typedef
  public onDownClick(){
    this.router.navigateByUrl('/interference_room4');
  }

  // tslint:disable-next-line:typedef
  @HostListener('click', ['$event']) onClick(event) {
    this.lockedRoomsService.roomLocked[9] = false;
    this.router.navigateByUrl('/interference_room3');
  }
}
