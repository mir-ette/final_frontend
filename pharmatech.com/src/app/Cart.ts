import { CartItem } from "./Cartitem";
 


export class Cart{
    drugs:CartItem[]=[];

    get totalPrice():number{
let totalPrice=0 ;
this.drugs.forEach(drugg=>{
    totalPrice+= drugg.price

})

return totalPrice;
    }
}