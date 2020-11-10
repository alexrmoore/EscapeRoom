import { Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'EscapeRoom';
  constructor(private router: Router){
    this.router.navigateByUrl('/home');
  }

  // tslint:disable-next-line:typedef
  onHintClick(){
    console.log('Hint Button Clicked!');
  }

  // tslint:disable-next-line:typedef
  onHomeClick(){
    this.router.navigateByUrl('/home');
  }

}

