import { Component , ElementRef, ViewChildren} from "@angular/core";
import { DragulaService } from "ng2-dragula/ng2-dragula";


@Component({
  selector: "blank",
  styles: [
    `
    .tool {
      background-color: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 0.25rem;
    }
    .header {
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
      padding: 0.5rem 1.25rem;
      background-color: #f5f5f5;
      border-bottom: 1px solid #e5e5e5;
    }
    .block {
      padding: 20px;
    }
    :host-context(#toolList) .block {
      padding: 0px;
    }
    :host-context(#toolList) .blank {
      display:none;
    }
    `
  ],
  template: `
    <div class="tool">
      <div class="header">Block
      </div>
      <div class="block">
        <div>
        </div>
        <div class="blank" [dragula]='"tool-bag"'>
            Place to drop
        </div>
      </div>
    </div>
  `
})
export class BlankComponent {
}
