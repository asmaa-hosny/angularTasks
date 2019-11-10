import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor() { }
  checkUser(email , pass){
    if(email=='asmaa-hosny@gmail.com' && pass=='12345')
    return true; 
    else
    return false;

  }
}
