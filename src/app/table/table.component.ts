import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  
  Highcharts=Highcharts

  chartOptions={}
  constructor(){

    this.chartOptions={

        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'Browser market in 2022',
            align: 'center'
        },
        subtitle: {
            text: '',
            align: 'left'
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            name: 'Medals',
            data: [
                ['Chrome', 63.1],
                ['Safari', 19.8],
                ['Firefox', 4.2],
                ['Edge', 4.1],
                ['opera', 2.3],
                ['Internet Explorer', 0.5],
                ['Other', 1.7],
                
            ]
        }]
    }
  }

}
