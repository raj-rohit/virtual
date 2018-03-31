import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router'; 
import { AuthService } from '.././services/auth.service';

import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent  {

  user1 = {
    email: '',
    password: ''
 };
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  username:string;password:string;


  constructor(private _firebaseAuth: AngularFireAuth, private _router: Router, private authService : AuthService) { 
    this.user = _firebaseAuth.authState;
this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
}

  onSubmit(){ 
    console.log("I am healthy");
    if(this.username=="admin" && this.password=="cleopatra")
    {
      localStorage.setItem("lastname", "Smith")
    console.log("I am healthy");
     this._router.navigate(['/admin']); 
  }
  else if(this.username=='student' && this.password=="manorama")
  {
    console.log("I am healthy");
     this._router.navigate(['/stud']); 
  }
  else if(this.username=='teacher' && this.password=="monopoly")
  {
    localStorage.setItem("lastname", "Smith")
    console.log("I am healthy");
     this._router.navigate(['/teach']); 
  }

  }
onRoast(){
  console.log("I am atrocious");
  this._router.navigate(['/newuser']);
}

signInWithGoogle() {
  return this._firebaseAuth.auth.signInWithPopup(
    new firebase.auth.GoogleAuthProvider()
  ).then((res) => this._router.navigate(['/stud'])
);

}

signInWithEmail() {
  this.authService.signInRegular(this.user1.email, this.user1.password)
     .then((res) => {
        console.log(res);
  
        this._router.navigate(['/stud']);
     })
     .catch((err) => console.log('error: ' + err));
}

}
