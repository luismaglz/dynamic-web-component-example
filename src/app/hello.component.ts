import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector:'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements HTMLElement {
  private state: 'opened' | 'closed' = 'closed';

  @Input()
  set message(message: string) {
    this._message = message;
    this.state = 'opened';
  }
  get message(): string { return this._message; }
  _message: string;

  @Output()
  closed = new EventEmitter();
}
