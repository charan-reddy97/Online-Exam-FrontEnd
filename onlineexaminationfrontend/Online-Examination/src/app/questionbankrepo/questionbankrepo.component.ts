import { Component, OnInit } from '@angular/core';
import { QuestionbankrepoService } from 'src/services/questionbankrepo.service';
import { QuestionBankRepo } from '../Model/questionbankrepo';

@Component({
  selector: 'app-questionbankrepo',
  templateUrl: './questionbankrepo.component.html',
  styleUrls: ['./questionbankrepo.component.css']
})
export class QuestionbankrepoComponent implements OnInit {

  questionbankrepo:Array<QuestionBankRepo>=[]
 
  constructor(private questionbankrepoService:QuestionbankrepoService) { }

  ngOnInit(): void {
    //this.questionbankrepoService.fetchQuestionBankRepo().subscribe(d => this.questionbankrepo = d);
       
   }
 

}
