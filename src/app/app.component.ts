import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  randomNumber: number;
  result: number;
  isSendFirstValue: boolean;

  constructor() {
    this.randomNumber = 0;
    this.result = 0;
    this.isSendFirstValue = false;
  }

  getResultValue(res: number) {
    this.randomNumber = res;
    if (!this.isSendFirstValue) {
      this.isSendFirstValue = true;
    }
  }

}