import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Drug } from '../drug';
import { Router } from '@angular/router';
@Component({
  selector: 'app-drug-add',
  templateUrl: './drug-add.component.html',
  styleUrls: ['./drug-add.component.css']
})
export class DrugAddComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  data:any;
  
  drugs:any;
  drug= new Drug();
  constructor(private formBuilder:FormBuilder,private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
    this.getDRUGSData()
  }

  getDRUGSData(){
    this.dataService.getData().subscribe(res=>{
      this.drugs=res;
     })
  
   }
  

  insertDrugssData(){
    this.dataService.insertData(this.drug).subscribe(res=>{
      //  this.data=res
      console.log(res);
    })
     this.router.navigate(['/drugs']);
  }









  // gotoDrugs(){
  //   this.router.navigate(['/drugs']);
  // }













}
