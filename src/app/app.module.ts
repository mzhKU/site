import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FlexComponent } from './flex/flex.component';


@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    FlexComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
