import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AnonymousIdentifierService } from '../anonymous-identifier.service';
import { TimersService } from '../timers.service';

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.css']
})
export class SecondScreenComponent implements OnInit {
  startSurveyURL = 'https://docs.google.com/forms/d/e/1FAIpQLScQiXQCsGKx1eoWEpBK8qvIgA3NkivqVyX4whowTCR7MUFBiQ/viewform?usp=pp_url&entry.906372509=';
  secondscreenTimerRef;
  overallTimerValue: number;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private anonymousIdentifierService: AnonymousIdentifierService, private timersService: TimersService) {}

  anonymousCode = this.anonymousIdentifierService.anonymousCode;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  startClick(){
    this.router.navigateByUrl('/reflection_room1');
  }

  // tslint:disable-next-line:typedef
  surveyClick(){
    // tslint:disable-next-line:max-line-length
    this.startSurveyURL = this.startSurveyURL.concat(this.anonymousCode);
    window.open(this.startSurveyURL, '_blank');
    this.timersService.startOverallTimer();
    this.secondscreenTimerRef = setInterval(() => {
      this.overallTimerValue = this.timersService.overallStopwatchSeconds;
    });
  }
}
