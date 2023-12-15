import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  public vahicles:any = [];
  public term:string = '';
  public pageNO:string = '';
  public column:string = '';
  public order:string = '';


  constructor(private VehicleService:VehicleService,private _router:Router){
    VehicleService.getVahicle().subscribe(
      (data:any)=>{
         this.vahicles = data
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
     )
  }

  filterdVahicles(){
    this.VehicleService.getFilterVahicles(this.term).subscribe(
      (data:any)=>{
        this.vahicles = data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  page(){
    this.VehicleService.getPages(this.pageNO).subscribe(
      (data:any)=>{
        this.vahicles = data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  sort(){
    this.VehicleService.sortedVahicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vahicles = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  delete(id:string){
    this.VehicleService.deleteVahicle(id).subscribe(
       (data:any)=>{
        alert("deleted succesfully");
        location.reload()
       },
       (err:any)=>{
        alert("Internal Server Error");

       }
    )
  }
  
    view(id:number) {
      this._router.navigateByUrl("/dashboard/vehicledetails/"+id)
 
    }
    edit(id:number){
      this._router.navigateByUrl("/dashboard/editvehicle-details/"+id);
    }
  }





