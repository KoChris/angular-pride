import { Component, OnInit, Input } from '@angular/core';
import { Year } from '../year';

@Component({
  selector: 'app-year-over-year',
  templateUrl: './year-over-year.component.html',
  styleUrls: ['./year-over-year.component.scss']
})
export class YearOverYearComponent implements OnInit {

  @Input() years: Year[];

  constructor() { }

  ngOnInit() {
  }

}
