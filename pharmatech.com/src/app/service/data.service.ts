import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) { }
registerUser(data:any){
  return this.http.post(environment.apiUrl+'/api/register/',data);
}

loginUser(data:any){
  return this.http.post(environment.apiUrl+'/api/login/',data);
}

getData(){
  return this.http.get(environment.apiUrl+'/api/drugs');
}
deleteData(id:any){
  return this.http.delete(environment.apiUrl+'/api/deleteDrug/'+id);
}
getDrugById(id:number){
  return this.http.get(environment.apiUrl+'/api/drug/'+id);
}
insertData(data:any){
  return this.http.post(environment.apiUrl+'/api/addDrug/',data);
}

updateData(id:any,data:any){
  return this.http.put(environment.apiUrl+'/api/updateDrug/'+id,data);
}

productsByCategory(category_id:any){
  
  
  return this.http.get(environment.apiUrl+'/api/drugs?category_id='+category_id);

}
//  productsByCategory(id:any){

  
//    return this.http.get(environment.apiUrl+'/api/productsByCategory/'+id);

//  }

////////////////////////////////////////////////////////
getUsersData(){
  return this.http.get(environment.apiUrl+'/api/users');
}
deleteUserData(id:any){
  return this.http.delete(environment.apiUrl+'/api/deleteUser/'+id);
}
getUserById(id:any){
  return this.http.get(environment.apiUrl+'/api/users'+id);
}
insertUserData(data:any){
  return this.http.post(environment.apiUrl+'/api/addUser/',data);
}

updateUserData(id:any,data:any){
  return this.http.put(environment.apiUrl+'/api/updateUser/'+id,data);
}
////////////////////////////////////////////////////////////////

getOrdersData(){
  return this.http.get(environment.apiUrl+'/api/orders');
}
deleteOrderData(id:any){
  return this.http.delete(environment.apiUrl+'/api/deleteOrder/'+id);
}
getOrderById(id:any){
  return this.http.get(environment.apiUrl+'/api/orders/'+id);
}
insertOrderData(data:any){
  return this.http.post(environment.apiUrl+'/api/addOrder/',data);
}

updateOrderData(id:any,data:any){
  return this.http.put(environment.apiUrl+'/api/updateOrder/'+id,data);
}


/////////////////////////////////////////////////////////////////////////

getCategoriesData(){
  return this.http.get(environment.apiUrl+'/api/categories');
}
deleteCategoryData(id:any){
  return this.http.delete(environment.apiUrl+'/api/deleteCategory/'+id);
}
getCategoryById(id:any){
  return this.http.get(environment.apiUrl+'/api/categories'+id);
}
insertCategoryData(data:any){
  return this.http.post(environment.apiUrl+'/api/addCategory/',data);
}

updateCategoryData(id:any,data:any){
  return this.http.put(environment.apiUrl+'/api/updateCategory/'+id,data);
}






  // constructor(private httpClient:HttpClient) { }
// hn70t el api elli mn el laravel makan...
  // getData(){
  //   return this.httpClient.get('http://.....'); 
  // }
// hnshil el :any awel mal el api yet7at
//   deleteData(id:any){
//     return this.httpClient.delete('http://....../'+id);
//   }
//   getUserById(id:any){
//     return this.httpClient.get('http://....../'+id);
//   }
 }
// hnshil el id:any mn getUserById