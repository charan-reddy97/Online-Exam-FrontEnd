import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatListModule} from '@angular/material/list';
import { MatGridListModule} from '@angular/material/grid-list'
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule} from '@angular/material/select'
import { MatDialogModule} from '@angular/material/dialog'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { QuestionbankrepoComponent } from './questionbankrepo/questionbankrepo.component';
import { QuestionComponent } from './question/question.component';
import { ExamComponent } from './exam/exam.component';
import { ManageQuestionbankComponent } from './manage-questionbank/manage-questionbank.component';
import { HeaderComponent } from './header/header.component';
import { EditQuestionbankComponent } from './edit-questionbank/edit-questionbank.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
 
    HomeComponent,
    
  
    OptionsComponent,
      
     
       StudentloginComponent,
                    StudenthomeComponent,
                
                    QuestionbankrepoComponent,
                                     QuestionComponent,
                                     ExamComponent,
                                     ManageQuestionbankComponent,
                                     HeaderComponent,
                                     EditQuestionbankComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
