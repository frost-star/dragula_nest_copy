import {ViewChild, Component, Type} from "@angular/core";

@Component({
  selector: "app-main",
  styles: [
    `
      .body {
        padding-left: 151px;
      }
      .drag-area {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 150px;
        padding: 20px;
      }
    `
  ],
  template: `
  <main>
    <sidebar></sidebar>
    <div class="body">
      <div class="drag-area" [dragula]='"tool-bag"'>
      </div>
    </div>
  </main>
  `
})
export class AppMainComponent {
}
