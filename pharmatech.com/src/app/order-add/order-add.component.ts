import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Order } from '../order';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  data:any;
  
  orders:any;
  order= new Order();
  
  constructor(private formBuilder:FormBuilder,private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
    this.getOrdersData()
  }



  getOrdersData(){
    this.dataService.getOrdersData().subscribe(res=>{
      this.orders=res;
     })
  
   }


   insertOrderData(){
  this.dataService.insertOrderData(this.order).subscribe(res=>{
    // this.getDrugsData
    console.log(res);
    
  })
  this.router.navigate(['orders']);
   }
}
