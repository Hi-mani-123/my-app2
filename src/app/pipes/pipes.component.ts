import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  public name1:string="Pratap Raj is UI developer";
  public name2:string="abc";
  public name3:string="xyz";
  public today:any=new Date();



  public products:any={
    name:'laptop',
  price:30000}
}
