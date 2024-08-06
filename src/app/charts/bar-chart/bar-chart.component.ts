import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent implements OnInit {
  barChartData: ChartConfiguration<'bar'>['data'];

  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  constructor(private _ChartService: ChartService) {}

  ngOnInit(): void {
    // Get the data from the API
    this._ChartService.getTheChartData().subscribe((res: any) => {
      // Month Wise Student Enrollment
      const data = res[1];

      const monthlyData: number[] = [];
      const monthlyLabels: any[] = [];

      data.forEach((el: { Month: string; Student_Count: number }) => {
        monthlyLabels.push(el.Month);
        monthlyData.push(el.Student_Count);
      });

      this.barChartData = {
        labels: monthlyLabels,
        datasets: [{ data: monthlyData, label: '' }],
      };
    });
  }
}
