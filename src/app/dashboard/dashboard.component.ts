import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 constructor(private _router: Router){}
 logout(){
  //remove
  localStorage.removeItem("token");
  this._router.navigateByUrl("/login");
 }
}
