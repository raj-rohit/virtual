import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router'
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { FormUploadComponentMock } from './upload/form-upload/form-upload-mock.component';
import { ListUploadComponentMock } from './upload/list-upload/list-upload-mock.component';
import { DetailsUploadComponentMock } from './upload/details-upload/details-upload-mock.component';
import { componentFactoryName } from '@angular/compiler';
import { UploadFileService } from './upload/upload-file.service';
import { UploadFileServiceMock } from './upload/upload-file-mock.service';
import { DataStoreComponent } from './data-store/data-store.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
 

const appRoutes: Routes = [
  { path: 'stud', component: StudentComponent , canActivate: [AuthGuard] },
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
    NewuserComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    DataStoreComponent,
    FormUploadComponentMock,
    DetailsUploadComponentMock,
    ListUploadComponentMock,
    
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
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    AngularFireAuthModule
  ],
  providers: [UploadFileService,UploadFileServiceMock,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
