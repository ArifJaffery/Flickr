import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {
   }

  get(url:string):Promise<any> {  
    const promise = new Promise((resolve,reject)=>{
      this.http.get(url)
                .toPromise()
                .then(
                  resp=>resolve(resp),
                  error=>reject(error)
                  );
    });
    return promise;
  }   
}
