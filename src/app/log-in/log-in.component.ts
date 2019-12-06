import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  

  

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onstart(n:string,p:string)
  {
    if(n=="iheb" && p=="admin"){
  this.router.navigate(['/proucts']);
    }
    else{this.router.navigate(['/user']);}
  }
}
