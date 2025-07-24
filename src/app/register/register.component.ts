import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { response } from 'express';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private AuthService:AuthService , private _Router:Router){}

  error:string='';
  registerForm:FormGroup = new FormGroup ({
    first_name:new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(8)]),
    last_name:new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(8)]),
    age:new FormControl(null ,  [Validators.required , Validators.min(16) , Validators.max(80)]),
    email:new FormControl(null ,  [Validators.required , Validators.email]),
    password:new FormControl(null ,  [Validators.required , Validators.pattern(/^[A-Z][a-z]{2,5}$/)])
  });

  submitRegister(formInfo:FormGroup){
    this.AuthService.register(formInfo.value).subscribe((response)=>{
      if(response.message == 'success')
      {
                localStorage.setItem('userToken' , response.token)

        this._Router.navigate(['/login'])

      }
      else{
        this.error = 'email is already registered'

      }
    })
  }

}
