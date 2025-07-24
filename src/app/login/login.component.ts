import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { response } from 'express';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private AuthService:AuthService , private _Router:Router){}

  error:string='';
  loginForm:FormGroup = new FormGroup ({
   
    email:new FormControl(null ,  [Validators.required , Validators.email]),
    password:new FormControl(null ,  [Validators.required , Validators.pattern(/^[A-Z][a-z]{2,5}$/)])
  });

  submitLogin(formInfo:FormGroup){
    this.AuthService.login(formInfo.value).subscribe((response)=>{
      if(response.message == 'success')
      {
        localStorage.setItem('userToken' , JSON.stringify(response.token));
        // this.AuthService.setUserData();
        this._Router.navigate(['/home'])

      }
      else{
        this.error = 'email is already registered'

      }
    })
  }

}
