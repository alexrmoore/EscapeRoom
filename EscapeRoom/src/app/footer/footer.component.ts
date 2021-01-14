import { Component, OnInit } from '@angular/core';
import { TimersService } from '../timers.service';
import { AnonymousIdentifierService } from '../anonymous-identifier.service';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {GiveupModalComponent} from '../giveup-modal/giveup-modal.component';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerTimerRef;
  overallTimer: string;
  hideTimer: boolean;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router,
              private timersService: TimersService,
              private anonymousIdentifierService: AnonymousIdentifierService,
              private lockedRoomsService: LockedRoomsService,
              private modalService: NgbModal) {
    this.footerTimerRef = setInterval(() => {
      this.overallTimer = this.timersService.finalTimeString;
      this.hideTimer = this.timersService.hideTimer;
    });
  }

  anonymousCode = this.anonymousIdentifierService.anonymousCode;

  ngOnInit(): void {
  }

  onInstructionsClick(): void{
    this.router.navigateByUrl('/instructions');
    this.timersService.currentPauseTime = this.timersService.overallStopwatch;
    this.timersService.stopOverallTimer();
  }

  onHintClick(): void{
    console.log('Hint Button Clicked!');
    console.log(this.lockedRoomsService.roomLocked);
  }

  onGiveUpClick(): void{
    const modalRef = this.modalService.open(GiveupModalComponent);
    modalRef.componentInstance.name = 'World';
    }
  }

