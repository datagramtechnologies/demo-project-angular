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
  this.isHide = false;
  let element = document.getElementById("logo-item");
  element.classList.add("stepout");
  let element2 = document.getElementById("welcometext");
  let element4 = document.getElementById("img2");
  
  
  element2.innerHTML = "Welcome";
  element2.classList.add("stepin");

  element4.classList.add("stepin");

  let element3 = document.getElementById("logo");
  element3.classList.add("rotate");
}
}
