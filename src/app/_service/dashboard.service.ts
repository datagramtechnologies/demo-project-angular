import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(
    private http: HttpClient,
  ) { }


  getBookList() {
    let param = {};
    const url = environment.baseAPI + "list-books" ;
    return this.http.get(url);
  }


}
