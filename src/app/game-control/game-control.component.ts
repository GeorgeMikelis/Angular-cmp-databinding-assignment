import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  disableStartButton: boolean = false;
  disableStopButton: boolean =true;
  ref;
  sec: number = 0;
  secondsArray: number[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  secondsPassed() {
    this.disableStartButton = true;
    this.disableStopButton = false;
    this.sec++;
    this.secondsArray.push(this.sec);
    console.log(this.sec);
    console.log(this.secondsArray);
  }

  onGameStarted() {
    this.ref = setInterval(() => {this.secondsPassed()}, 1000);
  }

  onGameStoped() {
    clearInterval(this.ref)
    this.disableStartButton = false;
    this.disableStopButton = true;
  }

}




