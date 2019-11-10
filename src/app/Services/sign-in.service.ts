import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor() { }
  checkUser(email , pass){
    if(email=='as@gmail.com' && pass=='12345')
    return true; 
    else
    return false;

  }
}
