import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-four',
  templateUrl: './question-four.component.html',
  styleUrls: ['./question-four.component.css']
})
export class QuestionFourComponent implements OnInit {
isHide:boolean = true;
  constructor() { }

  ngOnInit() {
  }
fadeOut(){
  this.isHide = true;
  var element = document.getElementById("logo-item");
  element.classList.add("step");
  var element2 = document.getElementById("welcometext");
  
  
  element2.innerHTML = "Welcome";
  element2.classList.remove("step");

  var element3 = document.getElementById("logo");
  element3.classList.add("rotate");
}
}
