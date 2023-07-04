import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  numbers: number[]
  handleStartGame($event: number[]) {
    this.numbers = $event
  }
  title = 'assignment-binding-view';
}
