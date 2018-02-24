import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../company'
import { CompanyService } from '../company.service'

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {

  company: Company;

  constructor(private route: ActivatedRoute, private companyService: CompanyService) { }

  ngOnInit() {
    let company = this.route.snapshot.paramMap.get('company');
    if (!company) company = "rbc";
    this.companyService.getCompany(company).subscribe(
      data => { console.log(data); this.company = {...data}; }
    );
  }

}
