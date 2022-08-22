import { Component, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OptionService } from 'src/services/option.service';
import { Option } from '../Model/option';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  options:Array<Option> = new Array<Option>();
  
  questionId:number=0;
  title:string="";
  isCorrectAns:boolean=true
  constructor(private optionService:OptionService,private route:ActivatedRoute) {

   
    


   }

  ngOnInit(): void {

    this.route.params.subscribe(d => {
      this.questionId = d["id"];
      this.options.push({ questionId:this.questionId,title:"",isCorrectAns:false });
      this.options.push({ questionId:this.questionId,title:"",isCorrectAns:false });
      this.options.push({ questionId:this.questionId,title:"",isCorrectAns:false });
      this.options.push({ questionId:this.questionId,title:"",isCorrectAns:false });
    });
  }


  saveAns():void
  {
    console.debug(this.options);
    this.optionService.saveAns(this.options);
  }
}
