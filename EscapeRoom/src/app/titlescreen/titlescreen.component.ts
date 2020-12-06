import { Component, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-titlescreen',
  templateUrl: './titlescreen.component.html',
  styleUrls: ['./titlescreen.component.css']
})
export class TitlescreenComponent implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  startButton() {
    this.router.navigateByUrl('/startinstructions');
    this.lockedRoomsService.roomLocked = [true, true, true, true, true, true, true, true];
    // this.lockedRoomsService.roomLocked = [false, false, false, false, false, false, false, false];
  }

}
