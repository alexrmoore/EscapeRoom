import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-interference-room1-info1',
  templateUrl: './interference-room1-info1.component.html',
  styleUrls: ['./interference-room1-info1.component.css']
})
export class InterferenceRoom1Info1Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    this.router.navigateByUrl('/interference_room1');
  }

}
