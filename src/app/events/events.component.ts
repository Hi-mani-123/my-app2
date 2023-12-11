import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  public text:string='';
  public users: string[]=[];


  submit(){
    this.users.push(this.text);
    this.text="";
    
  }
  delete(){
    this.users.pop()
  }

}

