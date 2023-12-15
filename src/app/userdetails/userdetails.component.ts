import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})

export class UserdetailsComponent {
  public users: any = {};
  constructor(private _acrivatedRoute: ActivatedRoute, private _userService: UsersService) {
    _acrivatedRoute.params.subscribe(
      (data: any) => {
        console.log(data.id);
        _userService.getUser(data.id).subscribe(
          (data: any) => {
            this.users = data;
          },
          (err: any) => {
            alert("internal error");
          }
        )
      }
    );
  }

}
