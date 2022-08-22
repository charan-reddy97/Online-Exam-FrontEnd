import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questions } from 'src/app/Model/question';
import { baseUrl } from 'src/environments/environment';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private http:HttpClient,private loginService:LoginService) { }

  fetchQuestions() : Observable<Array<Questions>>
  {
       let header = {
             "Authorization" : "Bearer " + this.loginService.getToken()?.token
       }

       let question = this.http.get<Array<Questions>>(baseUrl + "/api/question",{headers : header});
       question.subscribe();

       return question;
  }
}
