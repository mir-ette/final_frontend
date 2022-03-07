import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
// hn70t el api elli mn el laravel makan...
  getData(){
    return this.httpClient.get('http://.....'); 
  }
// hnshil el :any awel mal el api yet7at
  deleteData(id:any){
    return this.httpClient.delete('http://....../'+id);
  }
  getUserById(id:any){
    return this.httpClient.get('http://....../'+id);
  }
}
// hnshil el id:any mn getUserById