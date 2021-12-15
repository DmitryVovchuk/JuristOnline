import { Injectable } from '@angular/core';
import { FaqListComponent, IFaq } from './faq-list/faq-list.component';
// rxjs
import { interval, Observable, of } from 'rxjs';
import { map, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomePageDataService {

  constructor() { }
  persons: IFaq[] = [
    {  
        answer:'first answer',
        question:'first question',
        authorId:'',
        authorImg:'../assets/img/pic.jpg'
    },
    {  
      answer:'second answer',
      question:'second question',
      authorId:'',
      authorImg:'../assets/img/pic.jpg'
    },
    {  
      answer:'third answer',
      question:'third question',
      authorId:'',
      authorImg:'../assets/img/pic.jpg'
    }
  ];
  getFaqs(): Observable<IFaq[]> {
   return of(this.persons).pipe(
     map((item)=>{return item})
   );
  }
}
