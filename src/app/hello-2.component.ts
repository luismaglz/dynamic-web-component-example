import { Component, Input } from '@angular/core';

@Component({
  template: `<h1>Hello 2 {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class Hello2Component  {
  @Input() name: string;
}
