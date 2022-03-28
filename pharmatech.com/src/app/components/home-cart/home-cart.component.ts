import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/service/cartapi.service';
import { Drug } from 'src/app/drug';
import { CommonModule } from '@angular/common';
import { Cart } from 'src/app/Cart';
import { CartItem } from 'src/app/Cartitem'; 
import { DataService } from 'src/app/service/data.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-home-cart',
  templateUrl: './home-cart.component.html',
  styleUrls: ['./home-cart.component.css']
})
export class HomeCartComponent implements OnInit {
drugs:Drug[]=[];
grandTotal:any=0;

imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/drugs/';
  token: any = localStorage.getItem('token');
  userData: any;
  id: any;
  cart: any;
  city:any;
  public totalPrice: number = 0;

 drug= new Drug();

  constructor( private apiCart:CartapiService,private dataService:DataService) { }

  ngOnInit(): void {
    // this.apiCart.getDrugData().subscribe(res=>{
    //   this.drugs=res;
    //   this.grandTotal=this.apiCart.getTotalAmount();
    //   console.log(res);
      
    // })

    this.userData = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
    this.id = this.userData.user_id;
    this.city =this.userData.city;
    this.getCart();
    this.apiCart.cartRecordList.subscribe((res: any) => {
      this.cart = res;
    })


  }

  getCart() {
    this.apiCart.getCart(this.id).subscribe((res: any) => {
      this.apiCart.cartRecordList.emit(res);
      if (this.cart.drugs) {
        this.cart.drugs.forEach((item: any) => {
          let itemPrice;
          itemPrice = item.price * item.pivot.drug_quantity;
          this.totalPrice += itemPrice;
          return this.totalPrice
        })
      }
    });
  }

  emptycart() {
    this.apiCart.deleteCart(this.id).subscribe(() => {
      this.apiCart.cartHasBeenChanged.emit([]);
      this.cart.drugs = [];
    });
  }

  addItemToCart(item: any) {
    this.cart.drugs.forEach((drug: any) => {
      if (drug.id == item.id) {
        drug.pivot.drug_quantity += 1;
        this.totalPrice += drug.price;
      }
      drug.drug_quantity = drug.pivot.drug_quantity;
    })
    this.apiCart.updateCart(this.id, this.cart.drugs).subscribe((res: any) => {
      this.apiCart.cartHasBeenChanged.emit(res.drugs);
    });
  }

  removeFromCart(item: any) {
    this.cart.drugs = this.cart.drugs.filter((drug: any) => {
      if (drug.id == item.id) {
        drug.pivot.drug_quantity -= 1;
        this.totalPrice -= drug.price;
      }
      if (!drug.pivot.drug_quantity) {
        return false;
      }
      drug.drug_quantity = drug.pivot.drug_quantity;
      return true;
    })
    this.apiCart.updateCart(this.id, this.cart.drugs).subscribe((res: any) => {
      this.apiCart.cartHasBeenChanged.emit(res.drugs);
    });
  }
  deleteItem(item: any) {
    this.cart.drugs = this.cart.drugs.filter((drug: any) => {
      if (drug.id == item.id) {
        this.totalPrice -= item.price * item.pivot.drug_quantity;
        return false;
      }
      drug.drug_quantity = drug.pivot.drug_quantity;
      return true;
    })
    this.apiCart.updateCart(this.id, this.cart.drugs).subscribe((res: any) => {
      this.apiCart.cartHasBeenChanged.emit(res.drugs);
    });
  }


  insertOrderData() {
    this.dataService.insertOrderData(this.cart.drugs,this.city,this.id).subscribe(() => { })
    this.apiCart.deleteCart(this.id).subscribe(() => {
      this.apiCart.cartHasBeenChanged.emit([]);
      this.cart.drugs = [];
   });
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