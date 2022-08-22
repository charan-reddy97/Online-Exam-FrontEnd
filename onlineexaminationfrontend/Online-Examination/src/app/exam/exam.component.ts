import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/services/exam.service';
import { LoginService } from 'src/services/login.service';
import { QuestionbankrepoService } from 'src/services/questionbankrepo.service';
import { Option, QuestionBank, Questions1 } from '../Model/questionbank';
import { QuestionBankRepo } from '../Model/questionbankrepo';
import { TestAnswer } from '../Model/testanswer';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
questionBankId:number = 0;
questionBank:QuestionBank|undefined; 
currentQuestionIndex:number = 0;
currentQuestion:Questions1|undefined;

  constructor(private questionBankService:QuestionbankrepoService,private route:ActivatedRoute,private loginService:LoginService,private examService:ExamService) { 
     route.params.subscribe(d => { this.questionBankId = d["id"];});
  }

  ngOnInit(): void {
    if(this.questionBankId > 0)
    {
        this.questionBankService.fetchQuestionBankById(this.questionBankId).subscribe(d => 
          {this.questionBank = d;
           this.currentQuestion = this.questionBank.questions1[0];
           for(var i =0;i<this.currentQuestion.options.length;i++)
           {
              this.currentQuestion.options[i].isCorrectAns = false;
           }
          });
    }
  }

  onSaveOptions(){
     if(this.currentQuestion)
     {
        for(var i =0;i<this.currentQuestion.options.length;i++)
        {
            let option:Option = this.currentQuestion.options[i];
            if(option.isCorrectAns)
            {
                let answer:TestAnswer = new TestAnswer();
                answer.optionsid = option.id;
                answer.questionid = this.currentQuestion.id;

                let sid = this.loginService.getToken()?.profile?.id;

                if(sid)
                answer.studentid = sid;
                
                console.debug(answer);
                this.examService.saveTestAnswer(answer);
                
                if(this.questionBank)
                {
                if(this.currentQuestionIndex == (this.questionBank?.questions1?.length -1))
                {
                    alert("You have finished the examination")
                }
                else
                {
                  this.currentQuestionIndex += 1;
                  this.currentQuestion = this.questionBank.questions1[this.currentQuestionIndex];
                }
              }

                break;
            }

            option.isCorrectAns = false;
        }

        
     }
  }

}
