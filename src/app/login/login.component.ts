import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginsService } from '../logins.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginform: FormGroup= new FormGroup({
   email: new FormControl(),
   password: new FormControl()

  });
  constructor(private _loginservice:LoginsService, private  _router:Router){}

  login(){
    console.log(this.loginform);
    this._loginservice.login(this.loginform.value).subscribe(
      (data:any)=> {
        alert('login succesful');
        console.log(data);
        //store
        localStorage.setItem("token",data.token);
        // Go to Dashboard
        this._router.navigateByUrl("/dashboard");
      },
      (err:any)=>{
        alert("invalid credentials");
      }
    )
  }

}
