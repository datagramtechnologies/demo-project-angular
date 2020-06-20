import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user:string;
  constructor() {
    this.ngOnInit();
   }

  ngOnInit() {
    this.user = localStorage.getItem("name");
  }

}
