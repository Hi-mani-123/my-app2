import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {
  public id:any = "";
  public vehicleform: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    image: new FormControl()
  });

  constructor(private _vehicleService:VehicleService, private _activatedRoute:ActivatedRoute) {
    _activatedRoute.params.subscribe(
      (data:any) => {
        this.id = data.id;
        if(this.id)
        {
          _vehicleService.getvehicle(data.id).subscribe(
            (data: any) => {
              this.vehicleform.patchValue(data);
            },
            (error: any) => {
              alert("internal server error")
            }
          )
        }
        
      }
    )

    }

  submit() {
    if (this.id) {
      this._vehicleService.editvehicle(this.id, this.vehicleform.value).subscribe(
        (data: any) => {
          alert("vehicle detailes updated successfully")
        },
        (error:any)=>
        {
          alert("intsernal server error")
        }
      )
    }
    else {
      console.log(this.vehicleform.value);
      this._vehicleService.createvahicle(this.vehicleform.value).subscribe(
        (data: any) => {
          alert("Vehicle created successfully")
        },
        (error: any) => {
          alert("internal server error");
        }
      )
    }

  }
}

