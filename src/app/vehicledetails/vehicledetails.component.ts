import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.css']
})
export class VehicledetailsComponent {
  public vehicle: any = {};
  constructor(private _activatedRoute: ActivatedRoute, private _vehicleService:VehicleService) {

    _activatedRoute.params.subscribe(
      (data:any)=>
      {
        console.log(data.id);
        _vehicleService.getvehicle(data.id).subscribe(

          (data:any)=>
          {
            this.vehicle=data;
          },
          (error:any)=>
          {
            console.log("internal server error")
          }
        )
      }
      )
  }
}

