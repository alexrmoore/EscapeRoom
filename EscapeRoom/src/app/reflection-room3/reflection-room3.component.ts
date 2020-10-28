import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-reflection-room3',
  templateUrl: './reflection-room3.component.html',
  styleUrls: ['./reflection-room3.component.css']
})
export class ReflectionRoom3Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onDownClick(){
    this.router.navigateByUrl('/reflection_room2');
  }

}
