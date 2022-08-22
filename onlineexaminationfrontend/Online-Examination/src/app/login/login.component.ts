import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string = "";
password:string = "";
   
constructor(private loginService:LoginService,private route:Router) { }
ngOnInit(): void {
}
 Onlogin() : void {
  this.loginService.login(this.email, this.password);
  this.route.navigateByUrl("/home");
  
 }
}

