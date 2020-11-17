import { Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-photoelectric-room3-puzzle1',
  templateUrl: './photoelectric-room3-puzzle1.component.html',
  styleUrls: ['./photoelectric-room3-puzzle1.component.css']
})
export class PhotoelectricRoom3Puzzle1Component implements OnInit {
  dragPositionX1 = 0;
  dragPositionY1 = 0;
  dragPositionX2 = 0;
  dragPositionY2 = 0;

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    if (this.lockedRoomsService.roomLocked[4]){
      this.router.navigateByUrl('/photoelectric_room3_locked');
    }
    else {
      this.router.navigateByUrl('/photoelectric_room3');
    }
  }

  // tslint:disable-next-line:typedef
  dragEnd1(event: CdkDragEnd) {
    this.dragPositionX1 = event.source.getFreeDragPosition().x;
    this.dragPositionY1 = event.source.getFreeDragPosition().y;
  }

  // tslint:disable-next-line:typedef
  dragEnd2(event: CdkDragEnd) {
    this.dragPositionX2 = event.source.getFreeDragPosition().x;
    this.dragPositionY2 = event.source.getFreeDragPosition().y;
  }

}
