import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportFor } from './time-tracking-dashboard/report-for/report-for.component';
import { TimeTrackingDashboardComponent } from './time-tracking-dashboard/time-tracking-dashboard.component';
import { TimeTrackingComponent } from './time-tracking-dashboard/time-tracking/time-tracking.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeTrackingDashboardComponent,
    TimeTrackingComponent,
    ReportFor
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
