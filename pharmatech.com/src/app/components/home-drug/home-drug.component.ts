import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service'; 

import { Drug } from 'src/app/drug';
import { Router } from '@angular/router';
import { CartapiService } from 'src/app/service/cartapi.service';


@Component({
  selector: 'app-home-drug',
  templateUrl: './home-drug.component.html',
  styleUrls: ['./home-drug.component.css']
})
export class HomeDrugComponent implements OnInit {

  data:any;
  p: number = 1;
  drugs:any;
  drug= new Drug();
  
  constructor(private dataService:DataService,private router:Router,private apiCart:CartapiService) { }

  ngOnInit(): void {
    this.getDrugsData()
    this.drugs.forEach((a:any)=> {
      Object.assign(a,{quantity:1,total:a.price})
      
    });
  }

  getDrugsData(){
    this.dataService.getData().subscribe(res=>{
      this.drugs=res;
     })

    }

addtoCart(drug:any){
  this.apiCart.addTocart(drug)
 
  
  


}
}

