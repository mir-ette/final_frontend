import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service'; 

import { Drug } from 'src/app/drug';
import { Router } from '@angular/router';


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
  
  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
    this.getDrugsData()
  }

  getDrugsData(){
    this.dataService.getData().subscribe(res=>{
      this.drugs=res;
     })




}
}
