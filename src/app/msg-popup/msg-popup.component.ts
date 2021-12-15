import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { testData } from '../app-testData';
import { LawyerService } from '../lawyer.service';
import { MsgService } from '../msg.service';
@Component({
  selector: 'app-msg-popup',
  templateUrl: './msg-popup.component.html',
  styleUrls: ['./msg-popup.component.scss']
})
export class MsgPopupComponent implements OnInit {
  selectedCat : any;
  showSpinner = false;
  showMessage = false;
  categories:any;
  categoriesName:[string];
  msgForm:FormGroup;
  constructor(
    private lawyerService:LawyerService,
    private msgService:MsgService,
    private _fromBuilder:FormBuilder,
    public dialogRef: MatDialogRef<MsgPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.msgForm = this._fromBuilder.group({
      title:['',[Validators.required,Validators.maxLength(50),Validators.minLength(3)]],
      category:['',Validators.required],
      subcategory:['',Validators.required],
      message:['',[Validators.required,Validators.maxLength(5000),Validators.minLength(10)]]
    });
    this.categories  = testData.categories; 
    this.categoriesName = this.data.lawyerCategories;
  }
  onNoClick(): void {
    this.dialogRef.close({});
  }
  categorySelect(val){
    let selected = this.categories.find((item)=>{return item.category == val});
    this.selectedCat = selected.subcategory.map((item)=>{return item.category});
  }

  sendMsg(){
    this.msgForm.markAllAsTouched();
    if(this.msgForm.invalid){
      return;
    }
    let msg={};
    for(let fieldName in this.msgForm.controls){
      msg[fieldName] = this.msgForm.get(fieldName).value;
    }
    msg['recipientId'] = this.data.lawyerId;
    this.showSpinner = true;
    this.msgService.sendMsg(msg).subscribe((data)=>{
      
      if(data.status==100){
        this.showMessage = true;
        setTimeout(()=>{
          this.showSpinner = false;
          this.dialogRef.close();
        },1500);
      }
      
    });
  }
}
