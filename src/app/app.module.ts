import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { AppComponent } from "./app.component";
import { MyCustomComponentComponent } from "./my-custom-component/my-custom-component.component";

@NgModule({
  declarations: [AppComponent, MyCustomComponentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MyCustomComponentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(MyCustomComponentComponent, {
      injector
    });
    customElements.define("custom-component-1", customElement);
  }

  ngDoBootstrap() {}
}
