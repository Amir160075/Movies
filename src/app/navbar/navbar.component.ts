import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isLogin:boolean = false ;
  constructor(private _AuthService:AuthService){}

  ngOnInit(): void{
    this._AuthService.userData.subscribe(()=>{
      if(this._AuthService.userData.getValue() != null)
      {
        this.isLogin = true
      }
      else
      {
        this.isLogin = false
      }
    })
  }

  callLogOut()
  {
    this._AuthService.logOut();
  }

}
