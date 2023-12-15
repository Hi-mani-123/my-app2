import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseurla:any=("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");

  constructor(private _httpClient:HttpClient){}
     getaccount():Observable<any>{
      return this._httpClient.get(this.baseurla);
     }
     getUsers(): Observable<any> {
      return this._httpClient.get(this.baseurla)
    }
  
    // getUser(id: any): Observable<any> {
    //   return this._httpClient.get(this.baseurla + "/" + id);
    // }
    // postUsers(data: any): Observable<any> {
    //   return this._httpClient.post(this.baseurla + '/', data)
    // }
  
    // deletUser(data: any): Observable<any> {
    //   return this._httpClient.delete(this.baseurla + '/', data)
    // }
    // editUser(id: any, data: any): Observable<any> {
    //   return this._httpClient.put(this.baseurla + "/" + id, data);
    // }
  
  }
  

