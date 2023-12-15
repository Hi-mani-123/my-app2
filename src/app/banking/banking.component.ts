import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent {

  public banks:any=[];
  constructor(private _banking:AccountService, private _router:Router){ 
// _acrivatedRoute.params.subscribe(
    _banking.getaccount().subscribe(
      (data:any)=>{
       this.banks=data;
      },
      (err:any)=>{
        alert("Internal service error");
      })
    }
   edit(){

   }
   view(){
    this._router.navigateByUrl("/dashboard/");
   }
   

    }
    
 
  

