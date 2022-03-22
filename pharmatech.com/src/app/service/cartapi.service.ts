import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartapiService {
cartDataList:any=[];
drugs= new  BehaviorSubject<any>([])

  constructor( private http:HttpClient) { }

getDrugData(){
  return this.drugs.asObservable();
console.log();

}

setDrug(drugg:any){
  this.cartDataList.push(...drugg)
  this.drugs.next(drugg)

}

addTocart(drugg:any){
  this.cartDataList.push(drugg)
  this.drugs.next(this.cartDataList)
  this.getTotalAmount();
console.log(this.cartDataList);

}
getTotalAmount() {
  let grandTotal =0;
  this.cartDataList.map((a:any)=>{
    grandTotal += a.total
  })
}
removeCartData(drugg:any){
  this.cartDataList.map((a:any,index:any)=>
  {
    if(drugg.id===a.id){
this.cartDataList.splice(index,1)
    }
  })
this.drugs.next(this.cartDataList)
}
removeAllCart(){

  this.cartDataList=[]
  this.drugs.next(this.cartDataList)
}





}
