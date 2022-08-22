import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Option } from 'src/app/Model/option';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  constructor(private http:HttpClient) { }
  
  saveAns(options:Array<Option>) : Observable<Option[]>{
   
    var request = this.http.post<Option[]>(baseUrl + "/api/options",options);
    request.subscribe();
    return request;

    }
  }

    
  

 

