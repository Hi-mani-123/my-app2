import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {
  private baseurlf:any=("https://fakestoreapi.com/products")
  constructor(private _httpClient:HttpClient) {}
  getFlipkartProduct():Observable<any>{
    return this._httpClient.get(this.baseurlf)
  }
   
  
}

  
