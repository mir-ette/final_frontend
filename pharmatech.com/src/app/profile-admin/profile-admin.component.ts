import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/user';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})

export class ProfileAdminComponent implements OnInit {
  data:any
  user = new User();
  form!:FormGroup;
  submitted =false;
  token :any = localStorage.getItem('token');
  userDataFromToken : any
  

  constructor(private dataService: DataService,
    private route:ActivatedRoute,
    private router:Router,private formBuilder: FormBuilder,) { }

  
  createForm(){
    this.form = this.formBuilder.group({
    name:['' , [Validators.required , Validators.minLength(3)]],
    email:['' , [Validators.required ,Validators.email]],
    password:['' , [Validators.required ,Validators.minLength(6)]],
    city:['' , [Validators.required , Validators.minLength(3)]],
    street:['' , [Validators.required , Validators.minLength(3)]],
    });
  }
  ngOnInit(): void {
 
    console.log(this.route.snapshot.params['id']);
    this.getUserrData()
    this.createForm();
    if(this.token){
      this.userDataFromToken = jwt_decode(this.token);
    }
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
    console.log(res);
    
  });

  }

 
  updateUserrData(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    else{
      this.dataService.updateUserData(this.userDataFromToken.user_id , this.user).subscribe(res => {
      });
    }
  }

  get f(){
    return this.form.controls;
  }
















}



