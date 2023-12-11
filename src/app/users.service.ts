import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

private baseurl:any=("https://6128991386a213001729f9df.mockapi.io/test/v1/student");

  constructor(private _httpClient:HttpClient) { }
  getUsers():Observable<any>{
    return this._httpClient.get(this.baseurl);

  }
  getfilterusers(term:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }
  getfilteruser(term:string):Observable<any>{

    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term)

  }
}
