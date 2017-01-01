import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    let obsv = Observable
      .interval(1000)
      .take(5)
      .map(a => a * 4);

    obs
      .subscribe(data => console.log(`Subscriber: ${data}`));
  }

}
