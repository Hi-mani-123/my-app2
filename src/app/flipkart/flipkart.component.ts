import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})


export class FlipkartComponent {

  public flipkartProducts: any = []
  constructor(private _flipkartService: FlipkartService) {
    _flipkartService.getFlipkartProduct().subscribe(
    
          (data: any)=> {
      this.flipkartProducts = data
    },
      (err: any) => {
        alert("Internal Server Error")
      }
    )
  }
  // public flipKartProducts:any = []

  // constructor(private _flipkartService:FlipkartComponent) {
  //   _flipkartService.flipKartProducts().subscribe(
  //     (data:any)=>{
  //       this.flipKartProducts = data
  //     },
  //     (err:any)=>{
  //       alert("Internal Server Error")
  //     }
  //   )
  // }
}
