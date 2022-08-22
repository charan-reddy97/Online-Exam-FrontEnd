import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionbankrepoService } from 'src/services/questionbankrepo.service';
import { QuestionBank } from '../Model/questionbank';

@Component({
  selector: 'app-manage-questionbank',
  templateUrl: './manage-questionbank.component.html',
  styleUrls: ['./manage-questionbank.component.css']
})
export class ManageQuestionbankComponent implements OnInit {
  questionBanks:Array<QuestionBank> = []
  currentQuestionBank:QuestionBank = { qNum:0, qTitle : "", totalQuestions:0,questions1:[],id:0 };
  constructor(private questionBankService:QuestionbankrepoService,private route:Router) { }

  ngOnInit(): void {
      this.questionBankService.fetchQuestionBankRepo().subscribe(d => this.questionBanks = d);
  }

  onSaveQuestionBank()
  {
      this.questionBanks.push(this.currentQuestionBank);
      this.questionBankService.saveNewQuestionBank(this.currentQuestionBank);
      
  }
}
