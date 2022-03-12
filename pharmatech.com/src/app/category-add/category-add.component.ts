import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Category } from '../category';
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  data:any;

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

  insertCategoryData(){
    this.dataService.insertCategoryData(this. category).subscribe(res=>{
      // this.getDrugsData
      console.log(res);
      
    })
     }
}
