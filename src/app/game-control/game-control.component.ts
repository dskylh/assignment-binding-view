import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() startGameEvent = new EventEmitter<number[]>();
  numbers = [0];
  interval;

  startGame() {
    this.interval = setInterval(() => {
      this.increment();
    }, 1000);
  }
  increment() {
    this.numbers.push(this.numbers[this.numbers.length - 1] + 1);
    console.log(this.numbers);

    this.startGameEvent.emit(this.numbers);
  }
  stopGame() {
    clearInterval(this.interval);
  }
  createOddOrEven(event: any) {
    if (event.target.value % 2 == 0) {
    }
  }
}
