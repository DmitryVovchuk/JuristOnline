import { Injectable } from '@angular/core';
import {AppSettings } from './app-settings';
import { HttpClient } from '@angular/common/http';
import { map, first, throttleTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MsgService {
  newMessages=0;
  newAdminMessages=0;
  constructor(private http:HttpClient) { 

  }
  getMyMessages(chunk=0,Admin = false){
    return this.http.post<any>(`${AppSettings.API_ENDPOINT}/messages/getMessages`,{chunk:chunk,Admin:Admin})
    .pipe(throttleTime(100),map(data => {
        return data;
    }));
  }
  sendMsg(msg){
    return this.http.post<any>(`${AppSettings.API_ENDPOINT}/messages/saveMsg`,msg)
    .pipe(throttleTime(100),map(data => {
        return data;
    }));
  }
  markAsRead(msgGroup:string){
    return this.http.post<any>(`${AppSettings.API_ENDPOINT}/messages/markAsRead`,{groupName:msgGroup})
    .pipe(throttleTime(300),map(data => {
      return data;
  }));
  }
}
