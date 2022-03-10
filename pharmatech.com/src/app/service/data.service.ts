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
getDrugById(id:any){
  return this.http.get(environment.apiUrl+'/api/drug'+id);
}
insertData(data:any){
  return this.http.post(environment.apiUrl+'/api/addDrug/',data);
}

updateData(id:any,data:any){
  return this.http.put(environment.apiUrl+'/api/updateDrug/'+id,data);
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