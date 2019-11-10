import { SignInService } from './../Services/sign-in.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Empmail:string; 
  Emppass:string;
  flag:boolean;
  msgerror:boolean;
  index:number;
  
  constructor(private ck:SignInService, private nav :Router) { }

  ngOnInit() {
  }
  signin()
  {
     this.flag= this.ck.checkUser(this.Empmail , this.Emppass); 
     console.log(); 
     if(this.flag){
       this.index=this.Empmail.indexOf('@');
       console.log(this.index)
        this.nav.navigate(['home/'+this.Empmail.substring(0,this.index)])
     }
     else
     {
       this.msgerror=true;
       return this.msgerror;

     }

  }

}
