import { Component, OnInit } from '@angular/core';

import { Company } from '../company';
import { CompanyService } from '../company.service'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  company: Company;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.showCompany();
  }

  showCompany() {
    this.companyService.getCompany().subscribe(
      data => this.company = {...data});
  }

}
