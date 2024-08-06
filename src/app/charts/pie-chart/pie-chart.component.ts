import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent implements OnInit {
  pieChartData: ChartConfiguration<'pie'>['data'];

  pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
  };

  constructor(private _ChartService: ChartService) {}

  ngOnInit(): void {
    // Get the data from the API
    this._ChartService.getTheChartData().subscribe((res: any) => {
      const data = res[0];

      const Data: number[] = [];
      const Labels: any[] = [];

      data.forEach(
        (el: {
          Course_ID: number;
          Course_Name: string;
          Enrollment_Count: number;
        }) => {
          Labels.push(el.Course_Name);
          Data.push(el.Enrollment_Count);
        }
      );

      this.pieChartData = {
        labels: Labels,
        datasets: [{ data: Data, label: '' }],
      };
    });
  }
}
