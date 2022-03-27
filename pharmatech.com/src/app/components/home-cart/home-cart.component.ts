import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/service/cartapi.service';
import { Drug } from 'src/app/drug';
import { CommonModule } from '@angular/common';
import { Cart } from 'src/app/Cart';
import { CartItem } from 'src/app/Cartitem'; 
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-home-cart',
  templateUrl: './home-cart.component.html',
  styleUrls: ['./home-cart.component.css']
})
export class HomeCartComponent implements OnInit {
drugs:Drug[]=[];
grandTotal:any=0;


 drug= new Drug();
cart!:Cart;
  constructor( private apiCart:CartapiService, private cartService:CartService) { }

  ngOnInit(): void {
    // this.apiCart.getDrugData().subscribe(res=>{
    //   this.drugs=res;
    //   this.grandTotal=this.apiCart.getTotalAmount();
    //   console.log(res);
      
    // })



  }

   



  // setCart(){
  //   this.cart=this.cartService.getCart()
  // }


  // removeFromCart(cartItem:CartItem){
  //   this.cartService.removeFromCart(cartItem.drug.id)
  //   this.setCart()
  // }

  // changeQuantity(cartItem:CartItem, quantityInString:string){
  //   const quantity =parseInt( quantityInString);
  //   this.cartService.changeQuantity(cartItem.drug.id,quantity)
  //   this.setCart();
  // }









// removeDrug(drug:any){ 
//   this.apiCart.removeCartData(drug)
// }
// removeAllDrugs(){
//   this.apiCart.removeAllCart();
// }
}