import { Component, OnInit,Input } from '@angular/core';
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
 drugList: Drug[] = [];

  @Input() drugItem!: Drug ;
  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/drugs/';
  data: any;
  p: number = 1;
  drugs: any=[]; 
  drug = new Drug();
  searchText = '';
  selected_categories:any=[];
  filter_data:any;
  categories: any;
  constructor(private dataService: DataService, private router: Router, private apiCart: CartapiService) { }

  ngOnInit(): void {
    this.getDrugsData()
    this.drugs.forEach((a: any) => {
      Object.assign(a, { quantity: 1, total: a.price })

    });
console.log(this);

    this.apiCart.cartHasBeenChanged.subscribe(
      (res) => {
        this.drugList = res;
      },
      (err) => { },
      () => { }
    );

    this.drugItem;

    this.getCategories()

  }

  getDrugsData() {
    this.dataService.getData().subscribe(res => {
      this.drugs = res;
      console.log(this.drugs);
      console.log(this.drugItem);
      
      
    })

  }

  addtoCart() {
    this.apiCart.addToCart(this.drugItem)

console.log(this.drugItem);


  }


  getFilterData(){
    console.log('clicked');
    
    const pars =this.selected_categories.map((str:any)=>{
      return parseInt(str);
    });

const drugs={
  selected_categories:pars
}
console.log('drugs');

this.dataService.getFilteredData(drugs).subscribe(res=>{
this.filter_data=res
})

  }




filterDrugs(event: any){

  if (event.target.checked) {

    this.selected_categories.push(event.target.id)
  } else {
    const id =event.target.id
    for(let drugs of this.selected_categories){
      if(drugs === id){
        const index=this.selected_categories.indexof(drugs);
        console.log(index);
        
        this.selected_categories.splice(index,1)
      }

    }

  }



}


getCategories() {
  this.dataService.getCategoriesData().subscribe(res => {
    this.categories = res
  })
}
  


}

