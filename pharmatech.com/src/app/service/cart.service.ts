import { Injectable } from '@angular/core';
import { Cart } from '../Cart';
import { CartItem } from '../Cartitem';
import { Drug } from '../drug';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart= new Cart()
  // constructor() { }
  addToCart(drug:Drug): void{
    let cartItem =this.cart.drugs.find(drugg=>drugg.drug.id===drug.id)
    if(cartItem){
      this.changeQuantity(drug.id,cartItem.quantity+1)
      return;
    }
    this.cart.drugs.push(new CartItem(drug))
  }
  removeFromCart(drugId:number):void{
    this.cart.drugs=this.cart.drugs.filter(drugg=>drugg.drug.id !=drugId)
  }
  changeQuantity(quantity:number, drugId:number){
    let cartItem= this.cart.drugs.find(drugg=>drugg.drug.id !=drugId)
    if(!cartItem) return;
    cartItem.quantity=quantity
  }
getCart():Cart{
   return this.cart

}
}
