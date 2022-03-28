export class Order {
    status?:OrderStatus;
   total_cost :any;
   shipping_address  :any;
   id:any
}



export enum OrderStatus { pending = 'pending', shipped = 'shipped' };

export interface orderInterface {
  id?: number,
  status?: OrderStatus,
  total_cost?: number,
 
}
