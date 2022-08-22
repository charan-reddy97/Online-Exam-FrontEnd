import { Component, OnInit } from '@angular/core';
import { QuestionbankrepoService } from 'src/services/questionbankrepo.service';
import { QuestionBank } from '../Model/questionbank';
import { QuestionBankRepo } from '../Model/questionbankrepo';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {
   questionBanks:QuestionBank[]=[]
  constructor(private questionsbank:QuestionbankrepoService) { }

  ngOnInit(): void {
    let banks=this.questionsbank.fetchQuestionBankRepo();
    banks.subscribe(d=>this.questionBanks=d);
  }

}
