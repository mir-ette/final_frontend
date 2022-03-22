import { Drug } from "./drug";


 export class CartItem {
constructor(drug: Drug){
    this.drug= drug;
}
drug: Drug;
quantity:number=1;
get price():number{
    return this.drug.price*this.quantity;
}


 }

