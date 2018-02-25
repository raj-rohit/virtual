import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username:string;password:string;
  constructor(private _router: Router){} 

  onSubmit(){ 
    console.log("I am healthy");
    if(this.username=="admin" && this.password=="cleopatra")
    {
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
    console.log("I am healthy");
     this._router.navigate(['/teach']); 
  }

  }
onRoast(){
  console.log("I am atrocious");
  this._router.navigate(['/newuser']);
}

}
