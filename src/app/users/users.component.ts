import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public users:any=[]
  public term:string="";
  
     constructor( private _userService:UsersService){
      _userService.getUsers().subscribe(
        (data:any)=>{
          this.users=data;
        },
        (err:any)=>{
          alert("Internal server error");
        }

      )

     }
     getFilteredUsers(){
      this._userService.getfilterusers(this.term).subscribe(
        (data:any)=>{
          this._userService=data;
        },
        (err:any)=>{
          alert("internal server error");
        }
      )
     }
     submit(){}

    //  getfilterusers(){
    //   this._userService.getfilterusers(this.term).subscribe(
    //     (data:any)=>{
    //       this.users=data;
        
    //     },
    //     (err:any)=>{
    //       alert("Internal server error");
    //     }
    //   )
          // }
}
