import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from 'src/app/Model/resister';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  addStudent(username:string,contact:number,email:string,password:string) : Observable<Register>{
   
    return this.http.post<Register>(baseUrl + "/api/students",{ username, contact,email,password});
}
}

