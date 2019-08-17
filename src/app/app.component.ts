import { Component, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(injector: Injector){
    const myElement = createCustomElement(HelloComponent, {injector})
    customElements.define('my-custom-element', HelloComponent, );
    const test = document.createElement('my-custom-element') 
    document.body.appendChild(test);
  }
}
