import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';

import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';

const appRoutes: Routes = [
  { path: 'stud', component: StudentComponent },
  { path: 'teach', component: TeacherComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'newuser', component: NewuserComponent},
  { path: '', component: LoginComponent }
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    AdminComponent,
    LoginComponent,
    NewuserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
