import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test-angular-mfe';
  public counter: number = 0;

  constructor() { }

  public increment() {
    this.counter++;
    const event = new CustomEvent("counter", { detail: this.counter });
    window.dispatchEvent(event);
    return this.counter;
  }

  public decrement() {
    this.counter--;
    const event = new CustomEvent("counter", { detail: this.counter });
    window.dispatchEvent(event);
    return this.counter;
  }

  public reset() {
    this.counter = 0;
    const event = new CustomEvent("counter", { detail: this.counter });
    window.dispatchEvent(event);
    return this.counter;
  }
}
