import { Component, HostListener, OnInit } from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {Router} from '@angular/router';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  stopwatch: number;
  timerRef;
  newstart = true;

  constructor(private router: Router, private homeComponent: HomeComponent) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  startTimer(){
    this.homeComponent.PhysicsPathStart();
    const startTime = Date.now() - (this.stopwatch || 0);
    this.timerRef = setInterval(() => {
      this.stopwatch = Date.now() - startTime;
    });
    this.newstart = false;
  }


  // tslint:disable-next-line:typedef
  onHomeClick(){
    this.newstart = true;
    this.stopwatch = undefined;
    clearInterval(this.timerRef);
    this.router.navigateByUrl('/home');
  }

  // tslint:disable-next-line:typedef
  onHintClick(){
    console.log('Hint Button Clicked!');
  }
}
