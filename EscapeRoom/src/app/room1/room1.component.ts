import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-room1',
  templateUrl: './room1.component.html',
  styleUrls: ['./room1.component.css']
})
export class Room1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  @HostListener('click', ['$event']) onClick(event) {
    if (event.clientX > 770){
      // console.log('Right Button Clicked (Room 1)');
      this.router.navigateByUrl('/room2');
    }
  }

}
