import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drug } from 'src/app/drug';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { CartapiService } from 'src/app/service/cartapi.service';

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
  drugList: Drug[] = [];
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router,private cartService:CartService, private apiCart:CartapiService) {
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
    this. apiCart.cartHasBeenChanged.subscribe(
      (res) => {
        this.drugList = res;
      },
      (err) => { },
      () => { }
    );
  }
  getDrugsById(id: number) {
    this.dataService.getDrugById(id).subscribe((res) => {
      this.drug = res;
      console.log(this.drug);
    })
  }


  addtoCart() {
    this.apiCart.addToCart(this.drugItem)

    console.log(this.drugItem);


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