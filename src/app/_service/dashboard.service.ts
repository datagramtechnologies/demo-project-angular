import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, Authorization, Content-Type, Accept',


  })
};


@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(
    private http: HttpClient,
  ) { }


  getBookList() {
    let param = {};
    const url = environment.baseAPI + 'everything?q=paytm&from=2020-09-11&sortBy=publishedAt&apiKey='+ environment.apiKey ;
    return this.http.get(url,httpOptions);
  }


}
