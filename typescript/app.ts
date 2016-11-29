import "core-js";
import "rxjs/Rx";
import "zone.js/dist/zone";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Component, NgModule, ViewChild } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { SidebarComponent } from "./sidebar";
import { EditorComponent } from "./editor";
import { ToolListComponent } from "./toolList";

import { DragulaModule } from "ng2-dragula/ng2-dragula";

import { BlankComponent } from "./blank";


@Component({
  selector: "app-body",
  styles: [
    `
    `
  ],
  template: `
    <main>
      <div>
        <editor></editor>
      </div>
    </main>
  `
})
class AppBodyComponent {
}

@NgModule({
    declarations: [
      AppBodyComponent,
      EditorComponent,
      SidebarComponent,
      ToolListComponent,
      BlankComponent
    ],
    entryComponents: [
    ],
    imports: [
      BrowserModule,
      FormsModule,
      DragulaModule
    ],
    bootstrap: [AppBodyComponent]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
