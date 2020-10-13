import { Component, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  @HostListener('click', ['$event']) onClick(event) {
    // console.log(event.clientX);
    // console.log(event.clientY);
    if (event.clientX > 260 && event.clientX < 570){
      if (event.clientY > 230 && event.clientY < 385){
        // console.log('Start Button Clicked (Start)');
        this.router.navigateByUrl('/room1');
      }
    }
  }

}
