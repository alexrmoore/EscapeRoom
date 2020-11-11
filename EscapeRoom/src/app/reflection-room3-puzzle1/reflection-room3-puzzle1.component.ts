import { Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-reflection-room3-puzzle1',
  templateUrl: './reflection-room3-puzzle1.component.html',
  styleUrls: ['./reflection-room3-puzzle1.component.css']
})

export class ReflectionRoom3Puzzle1Component implements OnInit {

  sliderRoom3Puzzle1Value = '0';

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    const sliderRoom3Puzzle1 = document.getElementById('room3-puzzle1-slider') as HTMLInputElement;
    this.sliderRoom3Puzzle1Value = sliderRoom3Puzzle1.value;
    if (this.sliderRoom3Puzzle1Value === '90'){
      this.lockedRoomsService.roomLocked[0] = false;
    }
    this.router.navigateByUrl('/reflection_room3');
  }

  // tslint:disable-next-line:typedef
  @HostListener('input', ['$event']) onSliderInput() {
    const sliderRoom3Puzzle1 = document.getElementById('room3-puzzle1-slider') as HTMLInputElement;
    this.sliderRoom3Puzzle1Value = sliderRoom3Puzzle1.value;
  }

}
