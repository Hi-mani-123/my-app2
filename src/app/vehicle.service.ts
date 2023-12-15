import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private baseurlv: any = ("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");

    constructor(private _httpClient:HttpClient) { }
  getVahicle():Observable<any>{
      return this._httpClient.get(this.baseurlv);
    }
  getFilterVahicles(term:string):Observable<any>{
    return this._httpClient.get(this.baseurlv+'?filter='+term);
  }

  getPages(pageNO:string):Observable<any>{
    return this._httpClient.get(this.baseurlv+'?limit=10&page='+pageNO);
  }

  sortedVahicles(column:string, order:string):Observable<any>{
    return this._httpClient.get(this.baseurlv+'?sortBy='+column+'&order='+order)
  }

  deleteVahicle(id:string):Observable<any>{
    return this._httpClient.delete(this.baseurlv+'/'+id)
  }

  createvahicle(vahicle:any):Observable<any>{
    return this._httpClient.post(this.baseurlv,vahicle)
  }

  getvehicle(id:number):Observable<any>{
    return this._httpClient.get(this.baseurlv+"/"+id)
  }
  editvehicle(id:any,data:any):Observable<any>{
    return this._httpClient.put(this.baseurlv+"/"+id,data);

  }
  
}
   

