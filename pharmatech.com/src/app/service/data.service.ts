import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { orderInterface } from '../order';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 


  constructor(private http:HttpClient, private httpClient:HttpClient) { }

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
getDrugById(id:any){
  return this.http.get(environment.apiUrl+'/api/drug/'+id);
}
insertData(data:any){
  return this.http.post(environment.apiUrl+'/api/addDrug/',data);
}

updateData(id:any,data:any){
  return this.http.put(environment.apiUrl+'/api/updateDrug/'+id,data);
}

productsByCategory(category_id:any){
  
  
  return this.http.get(environment.apiUrl+'/api/productsByCategory/'+category_id);

}

getFilteredData(data:any){
  return this.http.post(environment.apiUrl+'/api/fetch_multiple_drugs/',data);
}

////////////////////////////////////////////////////////
getUsersData(){
  return this.http.get(environment.apiUrl+'/api/users');
}
deleteUserData(id:any){
  return this.http.delete(environment.apiUrl+'/api/deleteUser/'+id);
}
getUserById(id:number){
  let header = new HttpHeaders({
    Authorization: localStorage.getItem('token')!
  })
  return this.http.get(environment.apiUrl+'/api/users/'+id ,{headers:header});
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


/////////////////////newone/////////////////////////
insertOrderData(drugs:orderInterface,city:any,id:number) {

  let header = new HttpHeaders({
    Authorization: localStorage.getItem('token')!
  })
 


  return this.httpClient.post('http://127.0.0.1:8000/api/storeOrder',{drugs,city,id}, { headers: header });

}

updateOrderData(id : number, data : any){

  let header = new HttpHeaders({
    Authorization: localStorage.getItem('token')!
  })

  return this.httpClient.put('http://127.0.0.1:8000/api/updateOrder/'+id, data, { headers: header });



}




/////////////////////////////////////////////////////////////////////////

getCategoriesData(){
  return this.http.get(environment.apiUrl+'/api/categories');
}
deleteCategoryData(id:any){
  return this.http.delete(environment.apiUrl+'/api/deleteCategory/'+id);
}
getCategoryById(id:any){
  return this.http.get(environment.apiUrl+'/api/categories/'+id);
}
insertCategoryData(data:any){
  return this.http.post(environment.apiUrl+'/api/addCategory/',data);
}

updateCategoryData(id:any,data:any){
  return this.http.put(environment.apiUrl+'/api/updateCategory/'+id,data);
}


}



