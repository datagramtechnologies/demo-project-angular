import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
islogin:boolean = false;
constructor(
  private router:Router,
) { }


  title = 'Financial-App';

  logOut(){
    this.islogin = false;
    localStorage.clear();
    this.router.navigate(["login"]);
  }
 
}
