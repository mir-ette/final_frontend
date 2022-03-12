import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { Category } from '../category'; 
@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  data:any;
  id:any;
  categories:any;
  category= new Category();

  constructor(private dataService:DataService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getCategoriesData();
  }

  getCategoriesData(){
    this.dataService.getCategoryById(this.id).subscribe(res=>{
      this.data=res;
      this.category=this.data
    })
  }


  updateCategoryData(){
    this.dataService.updateCategoryData(this.id,this.category).subscribe(res=>{
      
    })
  }
  
  }







