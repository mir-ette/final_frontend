import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:any;
user=new User();
p: number = 1;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
   this.getUsersData()
  }

 getUsersData(){
  this.dataService.getUsersData().subscribe(res=>{
    this.users=res;
   })

 }

 deleteUserData(id:any){
  this.dataService.deleteUserData(id).subscribe(res=>{
   this.getUsersData();
  })

 }

 }


