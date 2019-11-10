import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  dataStream:Observable<string>;
  constructor() { }
  // 
  createStream(){
    this.dataStream = new Observable(observer=>{
      setTimeout(() => {
        observer.next('WElcome 11');
      }, 1000);
      setTimeout(() => {
        observer.next('WElcome 22');
      }, 3000);
      setTimeout(() => {
        observer.next('WElcome 33');
      }, 5000);
      setTimeout(() => {
        observer.complete();
      }, 7000);
    })

    return this.dataStream;
  }
}
