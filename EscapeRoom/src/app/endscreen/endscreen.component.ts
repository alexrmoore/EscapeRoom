import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TimerComponent} from '../timer/timer.component';
import { LockedRoomsService } from '../locked-rooms.service';
import { AnonymousIdentifierService } from '../anonymous-identifier.service';


@Component({
  selector: 'app-endscreen',
  templateUrl: './endscreen.component.html',
  styleUrls: ['./endscreen.component.css']
})
export class EndscreenComponent implements OnInit {
  surveyURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfm921Xmx067E3444Nvz_q4iGyl6_zUxeNXAVfAGxc_zIEWag/viewform?usp=pp_url&entry.337119393=';

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private timerComponent: TimerComponent, private lockedRoomsService: LockedRoomsService, private anonymousIdentifierService: AnonymousIdentifierService) { }

  stopwatchEndTime = this.timerComponent.stopwatchSeconds;
  anonymousCode = this.anonymousIdentifierService.anonymousCode;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onResetClick(){
    this.router.navigateByUrl('/home');
  }

  // tslint:disable-next-line:typedef
  public onSurveyClick(){
    this.surveyURL = this.surveyURL.concat(this.anonymousCode, '&entry.1980486934=', this.lockedRoomsService.endTimerStore.toString());
    window.open(this.surveyURL, '_blank');
  }

}
