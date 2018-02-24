import { Component, OnInit } from '@angular/core';
import { Company } from './company'
import { CompanyService } from './company.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  company: Company;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompany("RBC").subscribe(
      data => this.company = {...data});
  }

}
