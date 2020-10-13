import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-room2',
  templateUrl: './room2.component.html',
  styleUrls: ['./room2.component.css']
})
export class Room2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  @HostListener('click', ['$event']) onClick(event) {
    if (event.clientX < 40){
      // console.log('Left Button Clicked (Room 2)');
      this.router.navigateByUrl('/room1');
    }
    if (event.clientX > 770){
      // console.log('Right Button Clicked (Room 2)');
      this.router.navigateByUrl('/room3');
    }
  }

}
