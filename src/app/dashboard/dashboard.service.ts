/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom} from 'rxjs';
import Stock from '../shared/models/stock-model';



@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = 'https://backend-for-santander-dio-boot.herokuapp.com/be-santander-stock-quote-recreation';


  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]>{

    return await lastValueFrom(this.http.get<Stock[]>(`${this.baseUrl}/stock`))
  }
}
