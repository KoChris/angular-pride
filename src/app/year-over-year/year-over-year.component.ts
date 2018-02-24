import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Year } from '../year';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-year-over-year',
  templateUrl: './year-over-year.component.html',
  styleUrls: ['./year-over-year.component.scss']
})
export class YearOverYearComponent implements OnInit {

  @Input() years: Year[];

  private chart = [];

  private chartId: string = 'ch'.concat(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5));

  private yearLabels = [];
  private scores = [];

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.years.forEach(y => {
      this.yearLabels.push(y.year);
      this.scores.push(y.score);
    })
  }

  ngAfterViewInit() {
    this.createChart(this.chartId)
  }

  createChart(canvasId: string) {
    let ctx = this.elementRef.nativeElement.querySelector('#'.concat(canvasId));
    this.chart= new Chart(canvasId, {
      type: 'line',
      data: {
        labels: this.yearLabels,
        datasets: [
          {
            data: this.scores,
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
            display: true,
            ticks: {
              min: 0,
              max: 100
            }
          }]
        }
      }
    });
  }

}
