import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  token :any = localStorage.getItem('token');
  userDataFromToken : any
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.token){
      this.userDataFromToken = jwt_decode(this.token);
      
      
    }
    console.log(this.userDataFromToken);
    
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
