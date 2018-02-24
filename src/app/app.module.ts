import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { CompanyService } from './company.service';
import { CategoryComponent } from './category/category.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { YearOverYearComponent } from './year-over-year/year-over-year.component';
import { AppRoutingModule } from './app-routing.module';
import { ScorecardComponent } from './scorecard/scorecard.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CategoryComponent,
    ProgressBarComponent,
    YearOverYearComponent,
    ScorecardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
