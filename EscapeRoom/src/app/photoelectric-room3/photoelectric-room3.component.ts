import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-photoelectric-room3',
  templateUrl: './photoelectric-room3.component.html',
  styleUrls: ['./photoelectric-room3.component.css']
})
export class PhotoelectricRoom3Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onRightClick(){
    if (this.lockedRoomsService.roomLocked[14]){
      this.router.navigateByUrl('/overall_room1_locked');
    }
    else {
      this.router.navigateByUrl('/overall_room1');
    }
  }

  // tslint:disable-next-line:typedef
  public onLeftClick(){
    this.router.navigateByUrl('/photoelectric_room1');
  }

  // tslint:disable-next-line:typedef
  public onUpClick(){
    this.router.navigateByUrl('/photoelectric_room4');
  }

}