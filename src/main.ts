import { Component, inject } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import "zone.js";
import { createStoreClass } from "../projects/ext/src/lib/ext.service";

const PersonStore = createStoreClass();

@Component({
  selector: "app-root",
  standalone: true,
  template: ` Welcome `,
  providers: [PersonStore],
})
export class App {
  readonly #personStore = inject(PersonStore);
}

bootstrapApplication(App);
