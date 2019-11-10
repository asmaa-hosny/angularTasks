import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id:string;
  constructor(private myroutr:ActivatedRoute) { 
   this.id= this.myroutr.snapshot.paramMap.get('id');
   console.log(this.id);
  }

  ngOnInit() {
  }

}
