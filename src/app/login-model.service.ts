import { Injectable } from '@angular/core';
import {AppSettings } from './app-settings';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class User {
  id?: number;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  token?: string;
  userType:string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginModelService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public userId = '';
  public lawyerLogedIn = false;
  public userLogedIn = false;
  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }
  loginGoogle(){
    return this.http.get(`${AppSettings.API_ENDPOINT}/auth/google`)
    .pipe(map(user => {
      return user;
    }));
  }
  login(username, password):any {
      return this.http.post<any>(`${AppSettings.API_ENDPOINT}/localLogin/login`, { username, password })
          .pipe(map(user => {
            return user.msg;
          }));
  }

  register(user:User):any{
    return this.http.post<any>(`${AppSettings.API_ENDPOINT}/localLogin/signup`,user)
           .pipe(map(user=>{
             return user.msg;
           }));
  }

  confirmEmail(token){
    return this.http.get<any>(`${AppSettings.API_ENDPOINT}/localLogin/confirmation/${token}`)
    .pipe(map(user=>{
      return user;
    }));
  }

  registerWithGoogle(userType=1):any{
    return this.http.get<any>(`${AppSettings.API_ENDPOINT}/auth/google/register/:register${userType}`)
           .pipe(map(user=>{
             return user.msg;
           }));
  }

  logout() {
      // remove user from local storage and set current user to null
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
}
