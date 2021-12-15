import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { first } from 'rxjs/operators';
import { AppSettings } from './app-settings';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  constructor(private http:HttpClient) { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin:20,
    navSpeed: 700,
    navText: ["<img src='../../assets/img/left-direction-arrow.svg' alt=''>","<img src='../../assets/img/left-direction-arrow.svg' alt=''>"],
    responsive: {
      680: {
        items: 1
      },
      768: {
        items: 3
      },
      1280: {
        items: 4
      }
    },
    nav: true
  }
  cities = [];
  categories = [];
  msgAdminCategories = {};
  getCities(){
    return this.http.get<any>(`${AppSettings.API_ENDPOINT}/docs/cities`) 
    .pipe(first(data => {
      this.cities = data.cities[0].cities.sort((item1,item2)=>{ return item1.index > item2.index });
      return data;
  }));
  }
  getCagegories(){
    return this.http.get<any>(`${AppSettings.API_ENDPOINT}/docs/categories`) 
    .pipe(first(data => {
      this.categories = data;
      return data;
  }));
  }
  getmsgcategories(){
    return this.http.get<any>(`${AppSettings.API_ENDPOINT}/docs/msgcategories`) 
    .pipe(first(data => {
      this.msgAdminCategories = data.msgAdminCategories[0].adminMsgType;
      return data;
  }));
  }
}
