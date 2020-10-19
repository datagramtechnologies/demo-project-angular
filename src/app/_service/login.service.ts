import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(data){
   return this.http.post(environment.baseAPI+"getlogintoken.json",data);
  }

  getUserDetails() {
    let param={};
    const url = environment.baseAPI + '/dmt/getcustomer/';
    return this.http.post(url, param, {
      headers: new HttpHeaders()
        .set('Authorization', localStorage.getItem("_token"))
    });
  }

  
}
