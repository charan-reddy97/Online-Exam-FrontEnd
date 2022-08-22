import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionbankrepoService } from 'src/services/questionbankrepo.service';
import { QuestionBank, Questions1 } from '../Model/questionbank';

@Component({
  selector: 'app-edit-questionbank',
  templateUrl: './edit-questionbank.component.html',
  styleUrls: ['./edit-questionbank.component.css']
})
export class EditQuestionbankComponent implements OnInit {

  questionBankId:number = 0;
  questionBank:QuestionBank|undefined;
  currentQuestion:Questions1  = 
  {
      qNo:1001,
      questions:"",
      id:0,
      options: [
          {title:"",isCorrectAns:false,id:0},
          {title:"",isCorrectAns:false,id:0},
          {title:"",isCorrectAns:false,id:0},
          {title:"",isCorrectAns:false,id:0},
      ]
  }
  constructor(private route:ActivatedRoute,private questionBankService:QuestionbankrepoService,private router:Router) { 
      route.params.subscribe(d => this.questionBankId = d["id"]);

  }

  ngOnInit(): void {
    if(this.questionBankId > 0)
    {
        this.questionBankService.fetchQuestionBankById(this.questionBankId).subscribe(d => this.questionBank = d);
    }
  }

  onSaveCurrentQuestion() : void{
    this.questionBank?.questions1.push(this.currentQuestion);
    if(this.questionBank)
    {
      console.debug(this.questionBank);
      this.questionBankService.saveNewQuestionBank(this.questionBank);
      this.router.navigateByUrl("/editquestionbank/" + this.questionBank.id);
    }
  }

}
