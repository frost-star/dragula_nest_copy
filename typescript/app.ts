import "core-js";
import "rxjs/Rx";
import "zone.js/dist/zone";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Component, NgModule, ViewChild } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { SidebarComponent } from "./sidebar";
import { AppMainComponent } from "./appMain";

import { DragulaModule } from "ng2-dragula/ng2-dragula";

import { BlankComponent } from "./blank";


@Component({
  selector: "app-body",
  styles: [
    `
    `
  ],
  template: `
    <app-main></app-main>
  `
})
class AppComponent {
}

@NgModule({
    declarations: [
      AppComponent,
      AppMainComponent,
      SidebarComponent,
      BlankComponent
    ],
    entryComponents: [
    ],
    imports: [
      BrowserModule,
      FormsModule,
      DragulaModule
    ],
    bootstrap: [AppComponent]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
