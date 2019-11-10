import { StreamService } from '../Services/stream.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obsev',
  templateUrl: './observ.component.html',
  styleUrls: ['./observ.component.css']
})
export class ObservComponent implements OnInit {

  constructor(private mystream:StreamService) { }

  ngOnInit() {
  }
  loadData(){
    this.mystream.createStream().subscribe(
      next=>{
        console.log(next);
      }, 
      error=>{
        console.log(error);
      },
      ()=>{
        console.log("Done")
      }

    )
  }
}
