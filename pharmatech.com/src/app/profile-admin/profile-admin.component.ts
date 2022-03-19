import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/user';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {
  users: any;
  user = new User();
  p: number = 1;
  data: any;
  role: any;
  id:any;
  constructor(private dataService: DataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getUsersData()
  }
 getUsersData() {

    
      this.dataService.getUsersData().subscribe(res => {
        this.users = res;
      });
      console.log('yes');

 
   }

  // getUsersData() {

  //   if (this.data['role'] == "admin") {
  //     this.dataService.getUsersData().subscribe(res => {
  //       this.users = res;
  //     });
  //     console.log('yes');

  //   }
  //   else {
  //     console.log('no');


  //   }
  // }
  updateUserData(){
    this.dataService.updateUserData(this.id,this.user).subscribe(res=>{
       this.data=res;
       this.user=this.data
    })
    //this.router.navigate(['/users'])
  }

  getAdminData(){
    this.dataService.getUserById(this.id).subscribe(res=>{
  //     // console.log(res); 
     this.data=res;
      this.user=this.data;
      
    }) 
  
  
   }











  
  deleteUserData(id: any) {
    this.dataService.deleteUserData(id).subscribe(res => {
      this.getUsersData();
    })

  }


}



