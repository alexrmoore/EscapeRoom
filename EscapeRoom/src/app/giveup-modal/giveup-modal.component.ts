import { Component } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { TimersService } from '../timers.service';

@Component({
  selector: 'app-giveup-modal',
  templateUrl: './giveup-modal.component.html',
  styleUrls: ['./giveup-modal.component.css']
})
export class GiveupModalComponent {

  constructor(public activeModal: NgbActiveModal,
              private router: Router,
              private lockedRoomsService: LockedRoomsService,
              private timersService: TimersService) { }

  close(): void {
    this.activeModal.close();
  }

  giveUp(): void {
    this.activeModal.close();
    this.router.navigateByUrl('/congratulations');
    this.timersService.finalOverallTime = this.timersService.overallStopwatchSeconds;
    this.timersService.stopOverallTimer();
  }
}