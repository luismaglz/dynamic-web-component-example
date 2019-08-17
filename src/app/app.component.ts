import { Component } from "@angular/core";
import { TestServiceService } from "./test-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "custom-element-example";

  constructor(protected service: TestServiceService) {
    service.componentReference = this;
  }
}
