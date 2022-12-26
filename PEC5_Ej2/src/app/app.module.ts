import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WineitemComponent } from './wineitem/wineitem.component';
import { WinelistComponent } from './winelist/winelist.component';
import { WineNewComponent } from './wine-new/wine-new.component';

@NgModule({
  declarations: [
    AppComponent,
    WineitemComponent,
    WinelistComponent,
    WineNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
