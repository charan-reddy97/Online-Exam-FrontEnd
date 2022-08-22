import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBank } from 'src/app/Model/questionbank';
import { QuestionBankRepo } from 'src/app/Model/questionbankrepo';
import { baseUrl } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionbankrepoService {
  
 
  constructor(private http:HttpClient,private loginService:LoginService) { }

  fetchQuestionBankRepo() : Observable<Array<QuestionBank>>
  {
       let header = {
             "Authorization" : "Bearer " + this.loginService.getToken()?.token
       }

       let question = this.http.get<Array<QuestionBank>>(baseUrl + "/api/questionsbank",{headers : header});
       question.subscribe();

       return question;
  }

  saveNewQuestionBank(questionbank:QuestionBank) : Observable<QuestionBank>
  {
    let header = {
      "Authorization" : "Bearer " + this.loginService.getToken()?.token
}

      if(questionbank.id > 0)
      {
        let question = this.http.put<QuestionBank>(baseUrl + "/api/questionsbank",questionbank,{headers : header});
        question.subscribe();
        return question;
      }
      else
      {
            let question = this.http.post<QuestionBank>(baseUrl + "/api/questionsbank",questionbank,{headers : header});
            question.subscribe();
            return question;
      }

    
  }


  fetchQuestionBankById(id:number) : Observable<QuestionBank>
  {
       let header = {
             "Authorization" : "Bearer " + this.loginService.getToken()?.token
       }

       let question = this.http.get<QuestionBank>(baseUrl + "/api/questionsbank/byid/"+id,{headers : header});
       question.subscribe();

       return question;
  }
}
