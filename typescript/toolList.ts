import { Component, ElementRef, OnInit } from "@angular/core";
import { DragImage } from "ng2-dnd";

import { DragulaService } from "ng2-dragula/ng2-dragula";

@Component({
  selector: "tool-list",
  styles: [
    `
    .tools {
    }
    `
  ],
  template: `

  <div id="toolList" class="tools" [dragula]='"tool-bag"'>
    <div>
      <blank></blank>
    </div>
  </div>
  `
})
export class ToolListComponent {
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
