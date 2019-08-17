import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TestServiceService {
  componentReference: any;

  getValue() {
    console.log("Test Service whatever");
    return this.componentReference;
  }

  constructor() {}
}
