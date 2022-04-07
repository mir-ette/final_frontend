import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { ToastrService } from 'ngx-toastr';
import { Drug } from '../drug';
import { Router } from '@angular/router';
import {AbstractControl, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})

  export class DrugsComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  data:any;
  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/drugs/';
  drugs:any;
  drug= new Drug();
  
  p: number = 1;
  constructor( private formBuilder:FormBuilder,private dataService:DataService,private toastr:ToastrService,private router:Router) { } //ba3din 3ashan 3awza dema8


  ngOnInit(): void {
   
    this.getDrugsData()
  }

  getDrugsData(){
    this.dataService.getData().subscribe(res=>{
      this.drugs=res;
     })
  
   }
  
   deleteData(id:any){
    this.dataService.deleteData(id).subscribe(res=>{
     this.getDrugsData();
    })
  
   }

insertData(){
  this.dataService.insertData(this.drug).subscribe(res=>{
   
    console.log(res);
    this.router.navigate(['/drugs']);
    
  })
}
gotoDrugs(){
  this.router.navigate(['/drugs']);
}




}
