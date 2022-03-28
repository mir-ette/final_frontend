import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drug } from 'src/app/drug';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: any;
  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/drugs/';
  id: any;
   drugs:any;
   //drug= new Drug();
   drug: any=[];
@Input()drugItem!:Drug;
  //  drug!:Drug;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router,private cartService:CartService) {
    // route.params.subscribe((params)=>{
    //   if(params['id'])
    //   this.drug=dataService.getDrugById(params['id'])
    // })
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.getDrugsById(this.id)
  }
  getDrugsById(id: number) {
    this.dataService.getDrugById(id).subscribe((res) => {
      this.drug = res;
      console.log(this.drug);
    })
  }
addToCart(){
  this.cartService.addToCart(this.drug)
  this.router.navigateByUrl('/home/cart')
}
}
// ngOnInit(): void {
//   this.id=this.route.snapshot.params['id'];
//   this.getsData();

// }
// getsData(){
// this.dataService.getDrugById(this.id).subscribe(res=>{
//   this.data=res;
//   this.drug=this.data
// })
// }}