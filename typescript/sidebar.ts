import {Component} from "@angular/core";
import { DragulaService } from "ng2-dragula/ng2-dragula";

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
        <div id="toolList" class="tools" [dragula]='"tool-bag"'>
          <div>
            <blank></blank>
          </div>
        </div>
      </div>
    </div>
  `
})
export class SidebarComponent {
  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions("tool-bag", {
      copy: function (el: any , source: any) {
        return source.id === "toolList";
      },
      accepts: function(el: any , source: any) {
        return source.id !== "toolList";
      }
    });
    dragulaService.cloned.subscribe((value: any) => {
      if (value[3] === "copy") {
        // コピーしたオブジェクトに対してDragulaを有効化する
        let blank = value[1].getElementsByClassName("blank")[0];
        this.dragulaService.find("tool-bag").drake.containers.push(blank);
      }
    });
  }
}
