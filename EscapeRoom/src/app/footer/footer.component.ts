import { Component, OnInit } from '@angular/core';
import { TimersService } from '../timers.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerTimerRef;
  overallTimer: number;

  constructor(private timersService: TimersService) {
    this.footerTimerRef = setInterval(() => {
      this.overallTimer = this.timersService.overallStopwatchSeconds;
    });
   }

  ngOnInit(): void {
  }

}
