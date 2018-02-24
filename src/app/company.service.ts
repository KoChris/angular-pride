import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './company';

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompany() {
    return this.http.get<Company>("https://travistest.cfapps.io/mock/RBC")
  }
}
