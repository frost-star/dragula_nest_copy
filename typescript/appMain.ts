import {ViewChild, Component, Type} from "@angular/core";

@Component({
  selector: "app-main",
  styles: [
    `
      .body {
        padding-left: 151px;
      }
    `
  ],
  template: `
  <main>
    <sidebar></sidebar>
    <div class="body">
      <blank></blank>
    </div>
  </main>
  `
})
export class AppMainComponent {
}
