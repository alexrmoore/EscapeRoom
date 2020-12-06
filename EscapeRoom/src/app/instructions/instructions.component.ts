import { Component, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AnonymousIdentifierService } from '../anonymous-identifier.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  startSurveyURL = 'https://docs.google.com/forms/d/e/1FAIpQLScQiXQCsGKx1eoWEpBK8qvIgA3NkivqVyX4whowTCR7MUFBiQ/viewform?usp=pp_url&entry.906372509=';

  constructor(private router: Router, private anonymousIdentifierService: AnonymousIdentifierService) { }

  anonymousCode = this.anonymousIdentifierService.anonymousCode;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  surveyClick(){
    this.startSurveyURL = this.startSurveyURL.concat(this.anonymousCode);
    window.open(this.startSurveyURL, '_blank');
  }

  // tslint:disable-next-line:typedef
  startClick(){
    this.router.navigateByUrl('/reflection_room1');
  }

}
