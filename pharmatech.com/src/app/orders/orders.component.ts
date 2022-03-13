import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Order } from '../order';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  data:any;
  p: number = 1;
  orders:any;
  order= new Order();

  constructor(private formBuilder:FormBuilder,private dataService:DataService) { }

  ngOnInit(): void {
    this.getOrdersData()
  }



  getOrdersData(){
    this.dataService.getOrdersData().subscribe(res=>{
      this.orders=res;
     })
  
   }

   deleteOrderData(id:any){
    this.dataService.deleteOrderData(id).subscribe(res=>{
     this.getOrdersData();
    })
  


   }

   insertOrderData(){
  this.dataService.insertOrderData(this.order).subscribe(res=>{
    // this.getDrugsData
    console.log(res);
    
  })
   }
}
