import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lets Learn E2E';
  points = 1;

  plus1() {
    this.points++;
  }

  reset() {
    this.points = 0;
  }
}