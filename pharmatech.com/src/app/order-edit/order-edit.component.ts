import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { Order } from '../order';
@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  data:any;
  id:any;
  orders:any;
  order= new Order();

  constructor(private dataService:DataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getOrdersData();

  }
  getOrdersData(){
    this.dataService.getOrderById(this.id).subscribe(res=>{
      this.data=res;
      this.order=this.data
    })
  }


  updateOrderData(){
    this.dataService.updateOrderData(this.id,this.order).subscribe(res=>{
      
    })
    this.router.navigate(['/orders'])
  }




}
