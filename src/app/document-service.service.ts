import { Injectable, SkipSelf } from '@angular/core';
import {AppSettings } from './app-settings';
import { HttpClient } from '@angular/common/http';
import { map, first, throttleTime,catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';


export interface doc{
  _id?:string;
  userId?:string;
  title : string ;
  discription: string;
  content:string;
  keyWords:string[];
  type:string;
  subtype:string;
  isDocumentNew?:boolean;
  exampleValue:string;
  pdfExample?:any;
  clientFillWord : any [];
  price?:number;
}
export interface TreeData {
  primary?: boolean;
  category: string;
  iconname?: string;
  subcategory?: TreeData[];
  _id ? : string
  visible?:boolean
}
export interface City{
  index?:number,
  region:string,
  cities:[]
}
@Injectable({
  providedIn: 'any'
})
export class DocumentServiceService {
  constructor(@SkipSelf() private http:HttpClient,private _snackBar: MatSnackBar) { }
  public tempDoc: doc =  {title:'',discription:'',exampleValue:'',content:'',keyWords:[],type:'',subtype:'',clientFillWord:[]};
  public fieldsArr: string[];
  public lawyerDocArr: doc[]=[];
  public foundByKeyword : doc[];
  public categories:TreeData[];

  saveDocumentToServer(doc){
    return this.http.post<any>(`${AppSettings.API_ENDPOINT}/docs/save`,doc)
    .pipe(throttleTime(500),map(data => {
      return data;
  })
  );

  }

  checkTitleUnique(title:string){
    return this.http.post<any>(`${AppSettings.API_ENDPOINT}/docs/checkTitleUnique`,{title:title})
    .pipe(throttleTime(500),map((data)=>{
      return data.status;
    }));
  }

  getLawyerDocuments(){
    return this.http.get<any>(`${AppSettings.API_ENDPOINT}/docs/lawyerDocuments`)
    .pipe(throttleTime(500),map((lawyerDocs)=>{
      return lawyerDocs.data;
    }));
  }

  getDocumentById(Id){
    return this.http.post<any>(`${AppSettings.API_ENDPOINT}/docs/getDocumentById`,Id)
    .pipe(throttleTime(500),map(data => {
      return data;
    }));
  }

  searchDoc(query){
    return this.http.post<any>(`${AppSettings.API_ENDPOINT}/docs/searchDocuments`,query)
    .pipe(first((docs)=>{
      return docs.res;
    }))
  }

  findDocumentByKeyword(keyWord){
    return this.http.post<any>(`${AppSettings.API_ENDPOINT}/docs/findByKeyword`,keyWord);
  }

  generateDocument(filledValues){
    return this.http.post<any>(`${AppSettings.API_ENDPOINT}/docs/generateDocument`,filledValues);
  }

  getDocumentCategories(){
    return this.http.get<any>(`${AppSettings.API_ENDPOINT}/docs/categories`)
    .pipe(map(categories => {
        return categories.categories[0].types;
    }));
  }

  // getCities(){
  //   return this.http.get<any>(`${AppSettings.API_ENDPOINT}/docs/cities`)
  //   .pipe(map(cities => {
  //       return cities.cities;
  //   }));
  // }
}