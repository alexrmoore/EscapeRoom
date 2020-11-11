import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-photoelectric-room4',
  templateUrl: './photoelectric-room4.component.html',
  styleUrls: ['./photoelectric-room4.component.css']
})
export class PhotoelectricRoom4Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onDownClick(){
    if (this.lockedRoomsService.roomLocked[13]){
      this.router.navigateByUrl('/photoelectric_room3_locked');
    }
    else {
      this.router.navigateByUrl('/photoelectric_room3');
    }
  }

  // tslint:disable-next-line:typedef
  public info1Click(){
    this.router.navigateByUrl('/photoelectric_room4_info1');
  }
}
