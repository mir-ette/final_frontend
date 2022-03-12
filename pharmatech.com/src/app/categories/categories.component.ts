import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Category } from '../category';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  data:any;
  p: number = 1;
  categories:any;
  category= new  Category();
  constructor(private formBuilder:FormBuilder,private dataService:DataService) { }

  ngOnInit(): void {
    this.getCategoriesData()
  }
  getCategoriesData(){
    this.dataService.getCategoriesData().subscribe(res=>{
      this.categories=res;
     })
  
   }

   deleteCategoryData(id:any){
    this.dataService.deleteCategoryData(id).subscribe(res=>{
     this.getCategoriesData();
    })
  


   }

   insertCategoryData(){
  this.dataService.insertCategoryData(this. category).subscribe(res=>{
    // this.getDrugsData
    console.log(res);
    
  })
   }
}
