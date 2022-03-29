import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drug } from 'src/app/drug';
import { CartapiService } from 'src/app/service/cartapi.service';
import jwt_decode from "jwt-decode";
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit {

  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/drugs/';
  token: any = localStorage.getItem('token')
  userData: any;
  public searchTerm !: string;
  id: any;
  drugList: Drug[] = [];
  drug: any;
  drugCount: number = 0;
  grandTotal:any=0;
  cart: any;
  public totalPrice: number = 0;
  city:any;
  constructor(private router: Router, private apiCart: CartapiService,private dataService:DataService) { }

  ngOnInit(): void {

    this.userData = jwt_decode(this.token);

    this.id = this.userData.user_id;

    if (this.token) {
      this.userData = jwt_decode(this.token);
    }

    this.apiCart.cartHasBeenChanged.subscribe(
      (res: any) => {
        this.drugList = res;
        this.drugCount = 0;

        this.drugList.forEach((item: any) => {
          this.drugCount += item.pivot.drug_quantity;
        });


      },
      (err) => { },
      () => { }
    );


    //this.getCart();
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
      this.drug = res;
      if (this.drug.drugs) {
        for (const item of this.drug.drugs) {
          this.drugCount += item.pivot.drug_quantity;
        }
      }
    });
  }





  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
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










}
