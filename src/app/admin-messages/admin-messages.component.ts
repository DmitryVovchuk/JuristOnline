import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LawyerService } from '../lawyer.service';
import { LoginModelService } from '../login-model.service';
import { MsgService } from '../msg.service';
import { StaticDataService } from '../static-data.service';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.scss']
})
export class AdminMessagesComponent implements OnInit {
  msgForm:FormGroup;
  categories:any;
  categoriesName:[string];
  selectedCat:[];
  AdminMessages:any[];
  showSpinner = false;
  showForm = false;
  constructor(private _fromBuilder:FormBuilder,
              private staticData:StaticDataService,
              private msgService:MsgService,
              private loginService:LoginModelService,
              private lawyerService:LawyerService) { }

  ngOnInit(): void {
      this.AdminMessages = this.lawyerService.lawyerAdminMessages.map((item)=>{
         item.messages = item.messages.reverse();
         return item;
      });

    this.msgForm = this._fromBuilder.group({
      title:['',[Validators.required,Validators.maxLength(50),Validators.minLength(3)]],
      category:['',Validators.required],
      subcategory:['',Validators.required],
      message:['',[Validators.required,Validators.maxLength(5000),Validators.minLength(10)]]
    });
    this.categories  = this.staticData.msgAdminCategories;
    this.categoriesName = this.categories.map((item)=>{return item.category});
  }
  categorySelect(val){
    let selected = this.categories.find((item)=>{return item.category == val});
    this.selectedCat = selected.subcategory.map((item)=>{return item.category});
  }
  sendMsg(){
    if(this.msgForm.invalid){
      this.msgForm.markAllAsTouched();
      return;
    }
    let question={};
    Object.keys(this.msgForm.controls).forEach(key=>{
      question[key] = this.msgForm.controls[key].value;
    });
    question['recipientId'] = 'Admin';
    question['senderId'] = this.loginService.userId;

    this.showSpinner = true;
    this.msgService.sendMsg(question)
    .subscribe((data)=>{
      this.showSpinner = false;
      if(data.status==100){
        this.AdminMessages.unshift(data.data);
        // this.AdminMessages.unshift({messageStatus:'New',
        //                             groupName:data.data.groupName,
        //                             msg:this.msgForm.controls.message.value,
        //                             from:this.loginService.userId,
        //                             title:this.msgForm.controls.title.value,
        //                             category:this.msgForm.controls.category.value});
        this.showForm = false;
      }
    },
    (err)=>{
      this.showSpinner = false;
    })
  }
}
