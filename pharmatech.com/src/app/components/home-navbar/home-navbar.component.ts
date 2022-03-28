import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drug } from 'src/app/drug';
import { CartapiService } from 'src/app/service/cartapi.service';
import jwt_decode from "jwt-decode";


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




  constructor(private router: Router, private apiCart: CartapiService) { }

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


    this.getCart();

  

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

}
