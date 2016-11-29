import {Component} from "@angular/core";

@Component({
  selector: "sidebar",
  styles: [
    `
    .sidebar {
      position: fixed;
      width: 150px;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1000;
      display: block;
      padding: 20px;
      overflow-x: hidden;
      overflow-y: auto;
      border-right: 1px solid #eee;
      box-sizing: border-box;
    }
    `
  ],
  template: `
    <div class="row">
      <div class="sidebar">
        <tool-list></tool-list>
      </div>
    </div>
  `
})
export class SidebarComponent {
}
