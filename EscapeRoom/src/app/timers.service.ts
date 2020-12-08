import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimersService {
  overallStopwatch: number;
  overallStopwatchSeconds: number;
  overallTimerRef;
  finalOverallTime: number;

  roomTimes = [0, 0, 0, 0];

  hideTimer = false;

  constructor() { }

  // tslint:disable-next-line:typedef
  startOverallTimer() {
    const startTime = Date.now() - (this.overallStopwatch || 0);
    this.overallTimerRef = setInterval(() => {
      this.overallStopwatch = (Date.now() - startTime) / 1000;
      this.overallStopwatchSeconds = Math.floor(this.overallStopwatch);
    });
  }

  // tslint:disable-next-line:typedef
  stopOverallTimer() {
    clearInterval(this.overallTimerRef);
  }
}
