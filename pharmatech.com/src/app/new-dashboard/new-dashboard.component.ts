import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { DataService } from 'src/app/service/data.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-new-dashboard',
  templateUrl: './new-dashboard.component.html',
  styleUrls: ['./new-dashboard.component.css']
})
export class NewDashboardComponent implements OnInit {
  data:any
  user = new User();

  token :any = localStorage.getItem('token');
  userDataFromToken : any
  
  constructor(private dataService: DataService,
    private route:ActivatedRoute,) { }

  ngOnInit(): void {

 

    if(this.token){
      this.userDataFromToken = jwt_decode(this.token);
      console.log(this.userDataFromToken);
      
      
    }
    this.getUserrData()
  }
  getUserrData(){
    this.dataService.getUserById(this.userDataFromToken.user_id).subscribe(res => {
      console.log(res);
      this.data = res
      this.user.name = this.data.name
      this.user.email = this.data.email;
      this.user.password = this.data.password;
      this.user.city = this.data.city;
      this.user.street = this.data.street;
  
  });

  }




}
