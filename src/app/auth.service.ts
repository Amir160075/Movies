import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { jwtDecode } from 'jwt-decode' ;
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private HttpClient:HttpClient , private _Router:Router) {
    // دي علشان اما اعمل ريفرش كل  حاجه تفضل زي ما هي ش

    // if(localStorage.getItem('userToken') != null)
    // {
    //   this.setUserData();
    // }
   }

    userData = new BehaviorSubject(null);

  setUserData():void
  {
    let encodedToken =JSON.stringify(localStorage.getItem('userToken')) ;
    let decodedToken:any = jwtDecode( encodedToken ) 
    this.userData.next(decodedToken);

  }

  register(userData:object):Observable<any>
  {
    console.log('moc register data:' , userData)
    return of({message:'success'}).pipe(delay(500))
  //  return this.HttpClient.post('https://route-egypt-api.herokuapp.com/signup' , userData)
  }

  login(userData:object):Observable<any>
  {
    console.log('moc register data:' , userData)
    return of({message:'success'}).pipe(delay(500))
  //  return this.HttpClient.post('https://route-egypt-api.herokuapp.com/signin' , userData)
  }

  logOut():void
  {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login'])

  }
}
