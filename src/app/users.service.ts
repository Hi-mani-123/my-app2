import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private baseurl: any = ("https://6128991386a213001729f9df.mockapi.io/test/v1/student");

  private baseurl2: any = ('https://dummyjson.com/users');
  constructor(private _httpCLient: HttpClient) { }




  getUsers(): Observable<any> {
    return this._httpCLient.get(this.baseurl)
  }

  getUser(id: any): Observable<any> {
    return this._httpCLient.get(this.baseurl + "/" + id);
  }
  postUsers(data: any): Observable<any> {
    return this._httpCLient.post(this.baseurl + '/', data)
  }

  deletUser(data: any): Observable<any> {
    return this._httpCLient.delete(this.baseurl + '/', data)
  }
  editUser(id: any, data: any): Observable<any> {
    return this._httpCLient.put(this.baseurl + "/" + id, data);
  }

}
