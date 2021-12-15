import { Injectable } from '@angular/core';
import {AppSettings } from './app-settings';
import { HttpClient } from '@angular/common/http';
import { map, first } from 'rxjs/operators';


export interface ILawyer{
  _userId?:string;
  _id?:string;
  region? : string;
  city? : string;
  categories?:string[];
  phoneNumber?:string;
  cellPhone?: string;
  licenseNumber?:string;
  avatar? : string; 
  experience?:number;
  resume?:string;
  firstName?:string;
  lastName?:string;
  fatherName?:string;
  birthDay?:Date;

  university?:string,
  dateOfComplition?:Date,
  expireance?:number,
  lawyerLicence?:boolean
  officeAddress?: string,
  lastWorkPlace?:string,
  email?:string,
  linkLawyerSite?: string,
  odnoklassiki? :string,
  vk? :string,
  facebook? :string,

  diploms?:string[]
  documents?:any[]
}

@Injectable({
  providedIn: 'root'
})
export class LawyerService {
  lawyerAnket = {} as ILawyer;
  lawyerAnketOrigin = {} as ILawyer;
  lawyerAnketa4Update = {} as ILawyer;
  lawyerFaqs = [];
  lawyerMessages = [];
  lawyerAdminMessages = [];
  msgCounts = {newLawyerMsgCount : 0 ,newLawyerAdminCount : 0 };
  constructor(private http:HttpClient) { }
  udateAnketa(anketa){
    return this.http.post<any>(`${AppSettings.API_ENDPOINT}/lawyer/updateAnketa`,anketa)
    .pipe(first(data => {
      return data;
  }));
  }
  updateAvatar(file){
    return this.http.post<any>(`${AppSettings.API_ENDPOINT}/lawyer/updateAvatar`,file) //{avatar:file}
    .pipe(first(data => {
      return data;
  }));
  }
  updateDiploms(files){
    return this.http.post<any>(`${AppSettings.API_ENDPOINT}/lawyer/updateDiploms`,files);
  }
  getLawerAnketa(id=''){
    return this.http.get<any>(`${AppSettings.API_ENDPOINT}/lawyer/getLawyerAnketa/${id}`);
  }
  getLawerAnketaById(id){
    return this.http.post<any>(`${AppSettings.API_ENDPOINT}/lawyer/getLawyerAnketaById`,{id:id});
  }
  initForm(controls:any){
    if(!this.lawyerAnket) return;
    Object.keys(controls).forEach(item=>{  
      controls[item].value = this.lawyerAnket[item];    
    });
  }
  saveFaq(faq){
    return this.http.post<any>(`${AppSettings.API_ENDPOINT}/lawyer/updateFAQ`,faq)
    .pipe(map(data => {
      return data;
    }));
  }
  getFaq(){
    return this.http.get<any>(`${AppSettings.API_ENDPOINT}/lawyer/getFAQs`)
    .pipe(first(data => {
      return data;
    }));
  }
  findFaqByCategory(category=''){
    return this.http.post<any>(`${AppSettings.API_ENDPOINT}/lawyer/getFAQsByCategory`,{category:category})
    .pipe(first(data => {
      return data;
    }));
  }
  findAnketaByCategory(category=''){
    return this.http.post<any>(`${AppSettings.API_ENDPOINT}/lawyer/findAnketaByCategory`,{category:category})
    .pipe(first(data => {
      return data;
    }));
  }
  subscibeFunction(){

  }
}
