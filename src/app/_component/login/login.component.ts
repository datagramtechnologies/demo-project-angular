import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_service/login.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService:LoginService,
    private router:Router,
    private appComponent:AppComponent
  ) { }
username:string;
password:string;
  ngOnInit() {
  }

 
  loginSubmit(data){
    this.loginService.login(data.form.value).subscribe(res=>{
     
        console.log(res);
        let response:any= res;
        localStorage.setItem("_token",response.token);
        localStorage.setItem("name",response.adminName);
        this.router.navigate(["dashboard"]);
        this.appComponent.islogin=true;

      
      
    },err=>{
      console.log(err);
        alert(err.error.message);
      });
    console.log(data.form.value);
  }

}
