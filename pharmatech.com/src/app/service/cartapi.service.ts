import{HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Injectable, EventEmitter, Input, Output } from '@angular/core';
import jwt_decode from "jwt-decode";
import { Drug } from '../drug';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
// cartDataList:any=[];
// drugs= new  BehaviorSubject<any>([])

@Input()
  cartHasBeenChanged: EventEmitter<Drug[]> = new EventEmitter<Drug[]>();
  cartRecordList: EventEmitter<Drug[]> = new EventEmitter<Drug[]>();
  public drug!: Drug;
  token: any = localStorage.getItem('token');
  userData: any;
  id: any;





  constructor( private httpClient:HttpClient) { }

  // getCartData(id:any){
  //   return this.httpClient.get(environment.apiUrl+'/api/show/'+id);
  // }


  getCart(id: number) {
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.get('http://127.0.0.1:8000/api/show/' + id, { headers: header })
  }

  createCart(id: any ,cartItem: Drug[]) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
  
    
    return this.httpClient.post('http://127.0.0.1:8000/api/store/', {id, cartItem });
  }

  updateCart(id: number, cartItem: Drug[]) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.httpClient.put('http://127.0.0.1:8000/api/update/' + id, { id, cartItem }, { headers: header })
  }

  deleteCart(id: number) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.httpClient.delete('http://127.0.0.1:8000/api/destroy/' + id, { headers: header })
  }



  addToCart(drug: Drug) {

    this.userData = jwt_decode(this.token);
    this.id = this.userData.user_id;
    this.getCart(this.id).subscribe((res: any) => {
console.log(res);

      let cartItems: { drugs: Drug[] } = { drugs: [] }

      if (res.drugs) {
        cartItems = res;
        if (cartItems.drugs.some((item: any) => {
          return item.id == drug.id;
        })) {
          cartItems.drugs.forEach((item: any) => {
            if (item.id == drug.id) {
              item.drug_quantity = item.pivot.drug_quantity + 1;
            } else {
              item.drug_quantity = item.pivot.drug_quantity;
            }
          })
        } else {
          cartItems.drugs.forEach((item: any) => {
            item.drug_quantity = item.pivot.drug_quantity;
          })
        drug.drug_quantity = 1;
          cartItems.drugs.push(drug);
        }
        this.updateCart(this.id, cartItems.drugs).subscribe((res: any) => {
          this.cartHasBeenChanged.emit(res.drugs);
        });
      } else {
      drug.drug_quantity = 1;
        cartItems.drugs = [];
        cartItems.drugs.push(drug);
        this.createCart(this.id, cartItems.drugs).subscribe((res: any) => {
          this.cartHasBeenChanged.emit(res.drugs);
        });
      }
    });
  }






























// setDrug(drugg:any){
//   this.cartDataList.push(...drugg)
//   this.drugs.next(drugg)

// }

// addTocart(drugg:any){
//   this.cartDataList.push(drugg)
//   this.drugs.next(this.cartDataList)
//   this.getTotalAmount();
// console.log(this.cartDataList);

// }
// getTotalAmount() {
//   let grandTotal =0;
//   this.cartDataList.map((a:any)=>{
//     grandTotal += a.total
//   })
// }
// removeCartData(drugg:any){
//   this.cartDataList.map((a:any,index:any)=>
//   {
//     if(drugg.id===a.id){
// this.cartDataList.splice(index,1)
//     }
//   })
// this.drugs.next(this.cartDataList)
// }
// removeAllCart(){

//   this.cartDataList=[]
//   this.drugs.next(this.cartDataList)
// }





}
