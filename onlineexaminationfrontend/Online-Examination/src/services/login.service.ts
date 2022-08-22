import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { baseUrl } from 'src/environments/environment';
import { Token } from 'src/app/Model/login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient,private route:Router) { }

  login(email:string,password:string) : boolean {

      let request = this.httpClient.post<Token>(baseUrl + "/api/login",{
          Email   : email,
          Password:password
        });
      
      request.subscribe(d => {
          localStorage.setItem("Token",JSON.stringify(d));
          this.route.navigateByUrl("/home");
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
