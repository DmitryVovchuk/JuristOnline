import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentServiceService } from '../document-service.service';
import {  IFaq } from '../faq-list/faq-list.component';
import { LawyerService } from '../lawyer.service';
import { testData } from '../app-testData';

@Component({
  selector: 'app-edit-faqs',
  templateUrl: './edit-faqs.component.html',
  styleUrls: ['./edit-faqs.component.scss']
})
export class EditFaqsComponent implements OnInit {
  faqsHp:IFaq[]=[];
  faq:FormGroup;
  errorMessage = '';
  faqList : any [];
  category='';
  categ = '';
  isInvalid = false;
  touched = false;
  data = {} as IFaq;
  categories :any[];
  showProgressBar = false;
  faqSaveError = '';
  faqCompleted = '';
  showForm=false;
 // editorConfig = editorConfig;
  constructor(private documetService:DocumentServiceService,
    private formBuilder:FormBuilder,
    private lawyerService: LawyerService) { }

   ngOnInit() {
    this.faqsHp = this.lawyerService.lawyerFaqs;
    this.categories  = testData.categories.map((item)=>{return item.category});
    this.faq = this.formBuilder.group({
      categ:['',Validators.required],
      answer:['',Validators.required],
      question:['',Validators.required],
      _id:['']
    });
    this.categories = testData.categories.map(item=>item.category);//this.documetService.categories;//
  }
  editFaq(faq){
    this.showForm = true;
    this.faq.controls.categ.setValue(faq.categ);
    this.faq.controls._id.setValue(faq._id);
    this.faq.controls.question.setValue(faq.question);
    this.faq.controls.answer.setValue(faq.answer);
    this.faq.markAsPristine();
    this.faq.markAsUntouched();
  }
  saveToServer(){
    this.faqSaveError = '';
    this.touched = true;
    if(this.faq.invalid){
      return;
    }
    if(!this.faq.touched || this.faq.pristine){
      this.faqSaveError = 'Не было изменений ';
    }
    this.errorMessage = '';
    Object.keys(this.faq.controls).forEach(item=>{
      if(this.faq.controls[item].valid){
        this.data[item] =  this.faq.controls[item].value;
      }else{
        this.errorMessage += '/n'+item +' is not valid or empty';
      }     
    });
    this.showProgressBar = true;
    this.lawyerService.saveFaq(this.data).subscribe(
      (data)=>{
        this.showProgressBar = false;
        if(data.status == 100){
          let newFaq = {answer : this.data.answer, question:this.data.question,authorImg:this.lawyerService.lawyerAnket.avatar,categ:this.data.categ,status:'new'} as IFaq;
          this.faqsHp.unshift(newFaq);
          this.faqCompleted = 'ваш вопрос/ответ сохраннен';
          this.faq.reset();
          this.touched = false;
          this.showForm = false;
        }
        else if(data.status == 200){
          let updatedItem = this.lawyerService.lawyerFaqs.find((item)=>{ return item._id == this.data._id});
          updatedItem.answer = this.data.answer;
          updatedItem.question = this.data.question;
          updatedItem.categ = this.data.categ;
          this.faqCompleted = 'ваш вопрос/ответ изменен';
          this.faq.reset();
          this.touched = false;
          this.showForm = false;
        }
        else if(data.error.code == '11000'){
          this.faqSaveError = 'Такой вопрос уже существует';
        }
      },
      ()=>{this.showProgressBar = false;});
  }

}
