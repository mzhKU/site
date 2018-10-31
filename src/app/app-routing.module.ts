import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { OverviewComponent } from './overview/overview.component';
import { FlexComponent } from './flex/flex.component';
import { ObsComponent } from './obs/obs.component';
import { NoneComponent } from './none/none.component';


const routes: Routes = [
  // Why does this not work?
  // { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: '', component: OverviewComponent },
  { path: ':page', component: DetailComponent,
    children: [
      { path: 'flexbox', component: FlexComponent },
      { path: 'observables', component: ObsComponent } ]
  },
  // { path: 'technologie/flexbox', component: FlexComponent },
  // { path: 'technologie/observables', component: ObsComponent },
  { path: '**', component: NoneComponent }
];


// Exporting RouterModule makes router directives available
// in AppModule components.
// Convention: No components declared in a routing module.
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
