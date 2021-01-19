import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-info-screen',
  templateUrl: './info-screen.component.html',
  styleUrls: ['./info-screen.component.css']
})
export class InfoScreenComponent {

  constructor(private router: Router) { }

  continueClick(): void {
    this.router.navigateByUrl('/consent_form');
  }

}
