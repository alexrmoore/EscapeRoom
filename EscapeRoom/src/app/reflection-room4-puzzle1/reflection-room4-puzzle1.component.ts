import { Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-reflection-room4-puzzle1',
  templateUrl: './reflection-room4-puzzle1.component.html',
  styleUrls: ['./reflection-room4-puzzle1.component.css']
})
export class ReflectionRoom4Puzzle1Component implements OnInit {

  sliderRoom4Puzzle1Value = '0';

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    const sliderRoom4Puzzle1 = document.getElementById('room4-puzzle1-slider') as HTMLInputElement;
    this.sliderRoom4Puzzle1Value = sliderRoom4Puzzle1.value;
    if (this.sliderRoom4Puzzle1Value === '90'){
      this.lockedRoomsService.roomLocked[4] = false;
    }
    this.router.navigateByUrl('/reflection_room4');
  }

  // tslint:disable-next-line:typedef
  @HostListener('input', ['$event']) onSliderInput() {
    const sliderRoom4Puzzle1 = document.getElementById('room4-puzzle1-slider') as HTMLInputElement;
    this.sliderRoom4Puzzle1Value = sliderRoom4Puzzle1.value;
  }

}
