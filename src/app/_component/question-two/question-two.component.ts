import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/_service/dashboard.service';

@Component({
  selector: 'app-question-two',
  templateUrl: './question-two.component.html',
  styleUrls: ['./question-two.component.css']
})
export class QuestionTwoComponent implements OnInit {
  bookList:any = [];
  constructor(
    private dashboardService:DashboardService
  ) { }

  ngOnInit() {
  }

  checkAns(){
    this.dashboardService.getBookList().subscribe(res=>{
      this.bookList = res;
      console.log(this.bookList);
    });
  }

}
