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
    this.getData()
  }

  getData(){
    this.dataService.getData().subscribe(res=>{
      this.drugs=res;
     })
  
   }// hnshil el :any awel mal el api yet7at
  

  insertData(){
    this.dataService.insertData(this.drug).subscribe(res=>{
      // this.getDrugsData
      console.log(res);
    })
    this.router.navigate(['/drugs']);
  }
  // gotoDrugs(){
  //   this.router.navigate(['/drugs']);
  // }













}
