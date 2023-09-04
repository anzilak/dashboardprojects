import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  Highcharts=Highcharts

  chartOptions={}
  constructor(){


this.chartOptions={



  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
},
title: {
    text: 'Browser market 2022',
    align: 'center'
},
tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
},
accessibility: {
    point: {
        valueSuffix: '%'
    }
},
plotOptions: {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: false
        },
        showInLegend: true
    }
},
series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
        name: 'Chrome',
        y: 74.77,
        sliced: true,
        selected: true
    },  {
        name: 'Edge',
        y: 12.82
    },  {
        name: 'Firefox',
        y: 4.63
    }, {
        name: 'Safari',
        y: 2.44
    }, {
        name: 'Internet Explorer',
        y: 2.02
    }, {
        name: 'Other',
        y: 3.28
    }]
}]
  
}

  }

}
