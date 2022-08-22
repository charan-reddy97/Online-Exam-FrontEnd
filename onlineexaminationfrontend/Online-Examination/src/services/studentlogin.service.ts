import { HttpClient } from '@angular/common/http';
import { Token } from 'src/app/Model/login';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentloginService {
  studentlogin: any;

  constructor(private httpClient:HttpClient,private route:Router) { }

  login(email:string,password:string) : boolean {

      let request = this.httpClient.post<Token>(baseUrl + "/api/studentlogin",{
          Email   : email,
          Password:password
        });
      
      request.subscribe(d => {
          localStorage.setItem("Token",JSON.stringify(d));
         
          return true;  
      });

      return false;
  }

  getToken() : Token|undefined
  {
      let token:Token|undefined;

      let tokenStirng = localStorage.getItem("Token")?.toString();
      if(tokenStirng)
        token = JSON.parse(tokenStirng);

      return token;
  }

}


