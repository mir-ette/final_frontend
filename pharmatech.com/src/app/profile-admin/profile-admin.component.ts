import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/user';
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
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getUsersData()
  }
  getUsersData() {

    if (this.data['role'] == "admin") {
      this.dataService.getUsersData().subscribe(res => {
        this.users = res;
      });
      console.log('yes');

    }
    else {
      console.log('no');


    }
  }
  updateuser() {
    
  }
  deleteUserData(id: any) {
    this.dataService.deleteUserData(id).subscribe(res => {
      this.getUsersData();
    })

  }


}



