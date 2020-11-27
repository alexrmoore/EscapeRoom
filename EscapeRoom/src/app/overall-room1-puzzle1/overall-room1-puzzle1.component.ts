import { Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-overall-room1-puzzle1',
  templateUrl: './overall-room1-puzzle1.component.html',
  styleUrls: ['./overall-room1-puzzle1.component.css']
})
export class OverallRoom1Puzzle1Component implements OnInit {
  puzzleWon = true;

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    this.router.navigateByUrl('/overall_room1');
  }

}
