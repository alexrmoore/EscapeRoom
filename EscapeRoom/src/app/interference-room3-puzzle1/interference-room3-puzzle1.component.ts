import { Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-interference-room3-puzzle1',
  templateUrl: './interference-room3-puzzle1.component.html',
  styleUrls: ['./interference-room3-puzzle1.component.css']
})
export class InterferenceRoom3Puzzle1Component implements OnInit {
  puzzleWon = !(this.lockedRoomsService.roomLocked[4]);

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    if (this.lockedRoomsService.roomLocked[4]){
      this.router.navigateByUrl('/interference_room3_locked');
    }
    else {
      this.router.navigateByUrl('/interference_room3');
    }
  }
}
