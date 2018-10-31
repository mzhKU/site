import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './detail/detail.component';
import { OverviewComponent } from './overview/overview.component';
import { FlexComponent } from './flex/flex.component';
import { ObsComponent } from './obs/obs.component';
import { NoneComponent } from './none/none.component';
import { FlexAreaComponent } from './flex-area/flex-area.component';
import { FlexItemComponent } from './flex-item/flex-item.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    OverviewComponent,
    FlexComponent,
    ObsComponent,
    NoneComponent,
    FlexAreaComponent,
    FlexItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
