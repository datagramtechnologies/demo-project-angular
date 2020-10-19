import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/_service/dashboard.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user:string = "Guest";
bookList:any = [];

  constructor(
    private dashboardService: DashboardService
  ) {
    this.ngOnInit();
   }

  ngOnInit() {
  
    this.dashboardService.getBookList().subscribe(res=>{
      this.bookList = res;
      console.log(this.bookList);
    });
  }

}
