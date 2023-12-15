import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createusers',
  templateUrl: './createusers.component.html',
  styleUrls: ['./createusers.component.css']
})
export class CreateusersComponent {
  public id: any = "";

  constructor(private _userservice: UsersService, private _activatedRoute: ActivatedRoute) {
    _activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;
        _userservice.getUser(data.id).subscribe(
          (data: any) => {
            this.userForm.patchValue(data);
          },
          (err: any) => {
            alert("internal service error")
          }
        )
      }
    )

  }

  public userForm: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    image: new FormControl(),
    city: new FormControl(),
    cards: new FormArray([])
  })

  get cardsArray() {
    return this.userForm.get('cards') as FormArray;
  }

  add() {
    this.cardsArray.push({
      no: new FormControl(),
      month: new FormControl(),
      cvv: new FormControl(),
    })
  }

  delete(i: any) {
    alert("hello")
    this.cardsArray.removeAt(i)
  }

  submit() {

    if (this.id) {
      //edit
      this._userservice.editUser(this.id, this.userForm.value).subscribe(
        (data: any) => {
          alert("successfully updated");
        },
        (err: any) => {
          alert("error in updating data")
        }
      )
    }
    else{
      //create
      this._userservice.postUsers(this.userForm.value).subscribe(
        
          (data: any) => {
            alert("successfully updated");
          },
          (err: any) => {
            alert("error in updating data")
          }
        )
      

    }
  }
}
