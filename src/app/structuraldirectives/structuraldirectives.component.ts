import { Component } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  templateUrl: './structuraldirectives.component.html',
  styleUrls: ['./structuraldirectives.component.css']
})
export class StructuraldirectivesComponent {
  public no:number=0;
  public names: string[]=['ajay','pavan','pandu','h1','si2']
  public states: string[]=['AP','Hyd','kerala','Maharstra','Odisha']

  
  public products: any =[
    {name:'pen', price:230},
    {name:'pencil', price:10},
    {name:'book', price:500}
  ]
 
  
 
}
