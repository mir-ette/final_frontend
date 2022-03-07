import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
   this.getUsersData()
  }

getUsersData(){
  this.dataService.getData().subscribe(res=>{
    this.users=res;
  })

}// hnshil el :any awel mal el api yet7at

deleteData(id:any){
  this.dataService.deleteData(id).subscribe(res=>{
    this.getUsersData();
  })

}
}
