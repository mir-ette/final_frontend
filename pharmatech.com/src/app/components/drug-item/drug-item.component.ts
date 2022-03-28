import { Drug } from 'src/app/drug';
import { Component, OnInit, Input } from '@angular/core';
import { CartapiService } from 'src/app/service/cartapi.service';


@Component({
  selector: 'app-drug-item',
  templateUrl: './drug-item.component.html',
  styleUrls: ['./drug-item.component.css']
})
export class DrugItemComponent implements OnInit {
  @Input() drugItem!: Drug;
  token: any = localStorage.getItem('token')
  userData: any;
  id: any;
  drugList: Drug[] = [];

 

  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/drugs/';

  constructor( private apiCart:CartapiService) { }

  ngOnInit(): void {
    this. apiCart.cartHasBeenChanged.subscribe(
      (res) => {
        this.drugList = res;
      },
      (err) => { },
      () => { }
    );


console.log(this.token);



  }




  addtoCart() {
    this.apiCart.addToCart(this.drugItem)

    console.log(this.drugItem);


  }
}
