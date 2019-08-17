import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { TestServiceService } from "../test-service.service";

@Component({
  templateUrl: "./my-custom-component.component.html",
  styleUrls: ["./my-custom-component.component.scss"]
})
export class MyCustomComponentComponent implements OnInit, OnChanges {
  @Input()
  public name: string;

  @Input()
  public url: string;

  @Input()
  public color: string = "red";

  @Input()
  public size: number = 1;

  constructor(protected service: TestServiceService) {}

  ngOnInit() {
    if (!this.name || this.name.length === 0) {
      console.error(`Name attribute must be provided!`);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log(this.service.getValue().title);
  }
}
