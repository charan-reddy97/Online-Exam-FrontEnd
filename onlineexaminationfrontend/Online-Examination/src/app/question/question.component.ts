import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/services/question.service';
import { Questions } from '../Model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions:Array<Questions>=[]
  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
   this.questionService.fetchQuestions().subscribe(d => this.questions = d);
      
  }

}


