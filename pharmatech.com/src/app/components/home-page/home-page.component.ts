import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/category';
import { Drug } from 'src/app/drug';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute, Router,Params } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  data:any;
id:any;
 drugs:any;
  drug= new Drug();
  categories:any;
  category= new Category();
  p: number = 1;
  
 
  catid:any;
  category_id:any;

  constructor(private dataService:DataService, private activatedRoute:ActivatedRoute,private router:Router) { 
    
  }



ngOnInit(): void {
   this. catid=this.activatedRoute.snapshot.params[' id'];
  this.getDrugsData(this. catid);
}

getDrugsData(id:any){
  this.dataService.productsByCategory(id).subscribe(res=>{
    this.data=res;
    console.log(this.category_id);
    
    this.drug=this.data
   })

 }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag:true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }





}
