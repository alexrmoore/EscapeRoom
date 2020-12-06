import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AnonymousIdentifierService } from '../anonymous-identifier.service';

@Component({
  selector: 'app-congratulationsscreen',
  templateUrl: './congratulationsscreen.component.html',
  styleUrls: ['./congratulationsscreen.component.css']
})
export class CongratulationsscreenComponent implements OnInit {
  endSurveyURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdMlSZ-fL1uHb14gsEFY2sGnPpeQAQ4fdXJPv5ExQ_KzKWJPg/viewform?usp=pp_url&entry.330561948=';

  constructor(private router: Router, private anonymousIdentifierService: AnonymousIdentifierService) { }

  anonymousCode = this.anonymousIdentifierService.anonymousCode;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSurveyClick() {
    // tslint:disable-next-line:max-line-length
    this.endSurveyURL = this.endSurveyURL.concat(this.anonymousCode, '&entry.1216922865=', '0');
    window.open(this.endSurveyURL, '_blank');
  }

}
