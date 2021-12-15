import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

export interface IFaq {
  answer:string;
  question:string;
  authorId:string;
  authorImg:string;
  categ?:string;
  visible?:boolean;
  status?:string;
  _id?:string;
}
@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit{

  @Input() faqs: [IFaq];
  @Input() isLawyer = false;
  @Output() editThisFaq = new EventEmitter();
  faqvisible = [];  
  constructor() { }

  ngOnInit(): void {
    this.faqs.map((item)=>{
      this.faqvisible.push(true);
    });
  }
  editFaq(item){
    this.editThisFaq.emit(item);
  }
  getStyle(faq){
    if(faq.status === 'new'){
      return {'border' : '1px solid red' };
     // return {'background-color' : '#f4f4f4' };
    }
  }
  toggleContent(index){
    this.faqvisible[index] = !this.faqvisible[index];
  }
}
