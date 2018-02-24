import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from './company'
import { CompanyService } from './company.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  company: Company;

  constructor(router: Router, private companyService: CompanyService) { 
      router.events.subscribe((url:any) => console.log(url));
      console.log(router.url);
  }

  ngOnInit() {
    this.companyService.getCompany("RBC").subscribe(
      data => { console.log(data); this.company = {...data}; }
    );
  }

}
