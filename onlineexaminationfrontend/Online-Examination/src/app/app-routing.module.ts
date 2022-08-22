import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { EditQuestionbankComponent } from './edit-questionbank/edit-questionbank.component';
import { ExamComponent } from './exam/exam.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageQuestionbankComponent } from './manage-questionbank/manage-questionbank.component';
import { QuestionBankRepo } from './Model/questionbankrepo';
import { OptionsComponent } from './options/options.component';
import { QuestionComponent } from './question/question.component';
import { RegisterComponent } from './register/register.component';
import { StudentGuardGuard } from './student-guard.guard';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';



const routes: Routes = [
 

  {path:'login',component:LoginComponent },
  {path:'register', component:RegisterComponent},
  {path:'',component:HomeComponent,canActivate:[AuthGuardGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuardGuard]},
  {path:'question',component:QuestionComponent},
  {path:'options/:id',component:OptionsComponent},
  {path:'studentlogin',component:StudentloginComponent},
  {path:'studenthome',component:StudenthomeComponent},
  {path:'questionbankrepo',component:QuestionBankRepo},
  {path:'exam/:id',component:ExamComponent},
  {path:'manage-questionbank', component:ManageQuestionbankComponent},
  {path:'editquestionbank/:id', component:EditQuestionbankComponent}

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
