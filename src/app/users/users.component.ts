import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public users:any = []
 constructor(private _userServe:UsersService, private _router:Router){
    _userServe.getUsers().subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("internal service error")
      }
    )
 }
 deleteUser(id:string) {
  this._userServe.deletUser(id).subscribe(
    (data:any)=>{
      alert("dle succesfully");
      location.reload();
    },
    (err:any)=>{
      alert("internal error");
    }
  )

 }
 view(id:number){
  this._router.navigateByUrl("/dashboard/userdetails/"+id);
 }
 
 edit(id:number){
  this._router.navigateByUrl("/dashboard/edit-user/"+id);
 }
}
