import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBank } from 'src/app/Model/questionbank';
import { TestAnswer } from 'src/app/Model/testanswer';
import { baseUrl } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http:HttpClient,private loginService:LoginService) { }

  Save(qnum:number,qtitle:string,totalquestions:number,question1:string,id:number) : Observable< QuestionBank>{
   
    return this.http.post< QuestionBank>(baseUrl + "/api/questionsbank/byid",{ qnum, qtitle,totalquestions,question1,id});
  } 

  saveTestAnswer(testAnswer:TestAnswer) : Observable<any>
  {
    let header = {
      "Authorization" : "Bearer " + this.loginService.getToken()?.token
    }

    let question = this.http.post<any>(baseUrl + "/api/testanswer",testAnswer,{headers : header});
    question.subscribe();
    return question;
  }

}
