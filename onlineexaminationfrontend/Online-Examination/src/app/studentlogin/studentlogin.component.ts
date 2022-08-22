import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentloginService } from 'src/services/studentlogin.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {

  email:string = "";
  password:string = "";
   
constructor(private studentloginService:StudentloginService,private route:Router) { }
ngOnInit(): void {
}
 Onlogin() : void {
  this.studentloginService.login(this.email, this.password);
  this.route.navigateByUrl("/studenthome");
  
 }
}
