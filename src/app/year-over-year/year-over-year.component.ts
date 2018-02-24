import { Component, OnInit, Input } from '@angular/core';
import { Year } from '../Year';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-year-over-year',
  templateUrl: './year-over-year.component.html',
  styleUrls: ['./year-over-year.component.scss']
})
export class YearOverYearComponent implements OnInit {

  @Input() years: Year[];

  chart = [];

  chartId: string = "abc";

  constructor() { }

  ngOnInit() {
    let yearLabels = [];
    let scores = [];

    this.years.forEach(y => {
      yearLabels.push(y.year);
      scores.push(y.score);
    })

    this.chart= new Chart('canvas', {
      type: 'line',
      data: {
        labels: yearLabels,
        datasets: [
          {
            data: scores,
            borderColor: "#3cba9F",
            fill: false
          }
        ]
      },
      options:{
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    });
  }

}
