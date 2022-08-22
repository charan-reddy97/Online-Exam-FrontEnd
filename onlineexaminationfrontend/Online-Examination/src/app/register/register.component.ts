import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Register } from '../Model/resister';
import { RegisterService } from 'src/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 username:string="";
 contact:number=0;
email:string = "";
password:string = "";


   
constructor(private registerService:RegisterService,private route:Router) { }
ngOnInit(): void {
}
addStudent(){
  this.registerService.addStudent(this.username,this.contact,this.email,this.password)
  .subscribe((addStudent:Register)=>{
    this.username="";
    this.contact=0;
    this.email="";
    this.password="";
  
  })
  alert("Successfully Registered")
}
}
