import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { CompanyService } from './company.service';
import { CategoryComponent } from './category/category.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { YearOverYearComponent } from './year-over-year/year-over-year.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CategoryComponent,
    ProgressBarComponent,
    YearOverYearComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
