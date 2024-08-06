import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  private $API = 'https://54s06fdp-3520.inc1.devtunnels.ms/user/Get_Dashboard/';
  private $authToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcyMjY1ODE1MH0.p52PtHJiV9Mejc3HDRU_K565fjqFT1839_UR686Zj8I';
  private headers = { Authorization: `Bearer ${this.$authToken}` };

  constructor(private http: HttpClient) {}

  // Get the data from the API
  getTheChartData() {
    return this.http.get(this.$API, { headers: this.headers });
  }
}
