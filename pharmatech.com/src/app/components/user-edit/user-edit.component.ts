import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
 id:any;
data:any;
users:any;
user =new User();
  // data: Object | undefined;
  constructor(private route:ActivatedRoute,private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
     this.id=this.route.snapshot.params['id'];
     this.getUsersData();
  }
 getUsersData(){
  this.dataService.getUserById(this.id).subscribe(res=>{
//     // console.log(res); 
   this.data=res;
    this.user=this.data;
    
  }) 


 }

 updateUserData(){
  this.dataService.updateUserData(this.id,this.user).subscribe(res=>{
     this.data=res;
     this.user=this.data
  })
  this.router.navigate(['/users'])
}



// gotoUsers(){
//   this.router.navigate(['/']);
}





