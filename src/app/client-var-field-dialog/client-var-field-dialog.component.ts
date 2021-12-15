import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface FieldDialogData {
  fieldName : string;
  fieldType: string;
  fieldDescription: string;
  fieldGeneratedId: string;
}

@Component({
  selector: 'app-client-var-field-dialog',
  templateUrl: './client-var-field-dialog.component.html',
  styleUrls: ['./client-var-field-dialog.component.scss']
})
export class ClientVarFieldDialogComponent implements OnInit {
  fieldFormGroupe:FormGroup;
  sameNameError = false;
  inputVal = '';
  touched = false;
  options=[];
  optionsObj = {};
  sameOptionError = false;
  emptyOptionError = false;
  fieldTypes = [{value:'text',label:'текст'},{value:'number',label:'цифры'},{value:'date',label:'дата'},{value:'time',label:'время'},{value:'list',label:'список'}];
  isLast = false;
  constructor(public dialog: MatDialog,
              private formBuilder:FormBuilder,
              public dialogRef: MatDialogRef<ClientVarFieldDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: [FieldDialogData]) { }
  addOption(){
      let inputValue = this.inputVal;
      this.sameOptionError = false;
      this.emptyOptionError =false;
      if(!inputValue) {
        this.emptyOptionError = true;
        return;
      }
      if(this.options.some((item)=>{return item==this.inputVal;}) ) {
        this.sameOptionError = true;
        return;
      }
      this.options.push(inputValue);
      
      this.inputVal = '';
  }  
  removeOpt(index){
      this.options.splice(index,1);
  }
  selectType(value){
    this.options = [];
    this.isLast = value=='list' ? true:false;
  }
  ngOnInit() {
    console.log(this.data);

    this.fieldFormGroupe = this.formBuilder.group({
      fieldName:['',[Validators.required,Validators.maxLength(50)]],
      fieldType:['',Validators.required],
      fieldDescription:['',[Validators.required,Validators.maxLength(150)]],
      exampleValue:['',[Validators.required,Validators.maxLength(50)]]
    });
  }
  onNoClick(): void {
    this.dialogRef.close({});
  }
  closeDialog(){
    let values={};
    this.touched = true;
    
    if(this.data.some((item)=>{return item.fieldName == `_${this.fieldFormGroupe.get('fieldName').value}_`})){
      this.sameNameError = true; 
      return;
    }
    if(this.fieldFormGroupe.invalid){
      return;
    }
    this.fieldFormGroupe.controls.fieldName.setValue( `_${ this.fieldFormGroupe.controls.fieldName.value}_`);
    for(let controlName in this.fieldFormGroupe.controls){
      values[controlName] = this.fieldFormGroupe.get(controlName).value;
    }
    if(this.options.length){
      values['fieldOptions'] = this.options;
    }
    this.dialogRef.close(values);
  }
}

