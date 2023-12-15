import { Component } from '@angular/core';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent {
public memes:any=[]
constructor (private _memesservice:MemesService){
  _memesservice.getmemes().subscribe(
    (memedata:any)=>{
      this.memes=memedata.memes
    },
    (err:any)=>{
      alert("service error")
    }
  )
}
}
