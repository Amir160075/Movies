import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project2';
  constructor(private _AuthService:AuthService)
  {
    //login
    // _AuthService.userData.subscribe(()=>{
    //   if(_AuthService.userData.getValue() != null)
    //   {
    //     setTimeout(()=>{_AuthService.logOut()} , 5000)
    //   }
    // })
  }
}
