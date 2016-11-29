import {ViewChild, Component, Type} from "@angular/core";

@Component({
  selector: "editor",
  styles: [
    `
      .body {
        padding-left: 151px;
      }
    `
  ],
  template: `
    <sidebar></sidebar>
    <div class="body">
      <blank></blank>
    </div>
  `
})
export class EditorComponent {
}
