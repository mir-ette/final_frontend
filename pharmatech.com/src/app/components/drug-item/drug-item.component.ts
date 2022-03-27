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

  constructor( private apiCart:CartapiService) { }

  ngOnInit(): void {
  }


  addtoCart() {
    this.apiCart.addToCart(this.drugItem)

    console.log(this.drugItem);


  }
}
