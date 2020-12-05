import { Component, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-congratulationsscreen',
  templateUrl: './congratulationsscreen.component.html',
  styleUrls: ['./congratulationsscreen.component.css']
})
export class CongratulationsscreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSurveyClick() {
    console.log('Final Survey Called');
  }

}
