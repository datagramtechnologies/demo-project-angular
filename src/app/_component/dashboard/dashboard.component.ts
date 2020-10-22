import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/_service/dashboard.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user:string = "Guest";
bookList:any = [];
count:number = 1;
val:string = null;
observable:any;
startCount = 0;
subscribe = false;
btnName = "Start";

  constructor(
    private dashboardService: DashboardService
  ) {
    this.ngOnInit();
   }

  ngOnInit() {
  
    


    this.observable = new Observable(subscriber => {
      setInterval(() => {
        var date = new Date(0);
    date.setSeconds(this.count); // specify value for SECONDS here
    var timeString = date.toISOString().substr(11, 8);
    if(this.count>26){
      subscriber.complete();
      this.btnName="Completed & Stopped";
    }
    
        if(this.count%2==0 && this.subscribe){ 
         this.val =  this.repeat_string(this.get_string(this.count),this.count);
         subscriber.next(timeString+'=>'+this.val);
         this.val = ""+(this.count==0?null:this.count*5);
         subscriber.next(timeString+'=>'+this.val);
        }
        if(this.count%2!=0 && this.subscribe){
          this.val =  this.repeat_string(this.get_string(this.count),this.count);
          subscriber.next(timeString+'=>'+this.val) ;
          
        }
        // if(!){
        //   subscriber.next("Paused") ;
        // }
       
        
        
    if(this.subscribe){ this.count+=1;}
       
        
      }, 1000);
    });

    
  }

  q1ans(val){
    this.subscribe = val
    if(this.subscribe){
      this.btnName="Pause";
    }else{
      this.btnName="Start";
    }
    
   // console.log('just before subscribe');
    this.observable.subscribe({
      next(x) { 
        document.getElementById("ansArea").innerHTML += (x+"<br>") ;
        console.log(x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); 
       
        }
    });
    
    
    

    console.log('just after subscribe');
  }

  get_string(count) 
  {
    return String.fromCharCode(64 + count)
  }

  repeat_string(string, count) 
  {
    if ((string == null) || (count < 0) || (count === Infinity) || (count == null))
      {
        return('Error in string or count.');
      }
        count = count | 0; // Floor count.
    return new Array(count + 1).join(string);
  }

  
}
