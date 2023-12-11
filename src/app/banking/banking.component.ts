import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent {

  public banks:any=[];
  constructor(private _banking:AccountService){ 

    _banking.getaccount().subscribe(
      (data:any)=>{
       this.banks=data;
      },
      (err:any)=>{
        alert("Internal service error");
      })
    }
    
 
  
}
