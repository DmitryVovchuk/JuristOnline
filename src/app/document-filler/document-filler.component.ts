import { Component, OnInit,Input,ViewChild, Output,EventEmitter } from '@angular/core';
import {FormBuilder, FormControl,FormGroup, Validators,FormArray} from '@angular/forms';
import { DocumentServiceService } from '../document-service.service';
import { MatDialog } from '@angular/material/dialog';
import { SignaturePad } from 'angular2-signaturepad';
import { MatStepper } from '@angular/material/stepper';


@Component({
  selector: 'app-document-filler',
  templateUrl: './document-filler.component.html',
  styleUrls: ['./document-filler.component.scss']
})
export class DocumentFillerComponent implements OnInit {
  @ViewChild(MatStepper,{static:false})  stepper: MatStepper;
  @ViewChild(SignaturePad,{static:false}) signaturePad: SignaturePad;
  @Input() fieldArr :any [];
  @Input() doc :any;
  @Output() showSpinner = new EventEmitter();
  @Output() documentChanged  = new EventEmitter();
  @Output() searchWord = new EventEmitter();
  filledValues = {};
  valueToSend = {};
  showLinkForDownload = false;
  pathForDownload = '';
  isLinear = false;
  lastItem = false;
  docFilled = false;
  formGroup : FormGroup;
  form: FormArray;

  showArray=[];
  currentIndex = 1;
  numOfStep = 5;
  maxSteps = 7;
  diff=1;
  someIndex = 1;

  signaturePadOptions: Object = {     
    'minWidth': 1,
    'canvasWidth': 350,
    'canvasHeight': 200,
    'dotSize': 0.5,
  };
  constructor(private documentService:DocumentServiceService,
    private _formBuilder: FormBuilder,
    private signatureDialog:MatDialog) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      form : this._formBuilder.array([])
    }); 
    this.form = this.formGroup.get('form') as FormArray;
    // this.fieldArr.push({type : 'single',val:['signature']});
    if(!this.fieldArr.some((item)=>{return item.signature;})){
      this.fieldArr.push({fieldValue:'',signature:true,fieldType:'signature',fieldDescription:'please sign the document',fieldName:'signature'});
    }
    if(this.fieldArr && this.fieldArr.length){       
        this.fieldArr.forEach((item)=>{
          if(this.showArray.length<this.numOfStep){
            this.showArray.push(true);
          }else{
            this.showArray.push(false);
          }
          this.filledValues[item.fieldUUID] = {fieldName:item.fieldName,fieldValue:'',fieldType:item.fieldType};
              this.addItem(item.fieldType);
        });
    }
    this.diff= Math.floor(this.numOfStep/2);
    this.maxSteps = this.fieldArr.length;
  }
  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }
  moveStep(next){
    let direction = next?1:-1;
    this.currentIndex +=direction;
    if(this.currentIndex<= this.diff+1 &&  this.showArray[0]  || this.maxSteps - this.currentIndex<this.diff ){
      next ? this.stepper.next():this.stepper.previous();
    }else{
      this.showArray = this.showArray.map((item,ind)=>{
        return ind>=this.currentIndex-(this.diff+1) && ind <this.currentIndex+this.diff;
      });  
      this.someIndex =  this.currentIndex - this.diff;
      this.stepper.selectedIndex = this.diff;   
    }
    this.searchWord.emit(this.fieldArr[this.currentIndex-1].fieldName);
  }
  wrongDate(index){
    return this.formGroup.get('form')['controls'][index].touched && this.formGroup.get('form')['controls'][index].invalid;//this.checkIfDate(this.formGroup.get([index]).value);
  }
  checkIfDate(d){
    if (Object.prototype.toString.call(d) === "[object Date]") {
      // it is a date
      if (isNaN(d.getTime())) {  // d.valueOf() could also work
        return false;
      } else {
        return true;
      }
    } else {
        return false;
    }
  }
  generatePDF(){
    this.filledValues['signature'] = this.signaturePad.toDataURL();
    this.filledValues['docId'] = this.doc._id;
    Object.keys(this.filledValues).forEach((key)=>{
      if(this.filledValues[key].fieldType=='date'){
        let date = new Date(this.filledValues[key].fieldValue);
        this.filledValues[key].fieldValue = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
      }
    });
    this.showSpinner.emit(true);
    this.documentService.generateDocument(this.filledValues)
    .subscribe(
      (data)=>{
        this.showSpinner.emit(false);
          if(data.buffer){
            this.docFilled = true;
            this.doc.pdfExample = data.buffer;
            this.documentChanged.emit(this.doc);
          }
      },
      (err)=>{
        this.showSpinner.emit(false);
      }
    )
  }
  savePDF(){
    const arr = new Uint8Array(this.doc.pdfExample.data);
    const blob = new Blob([arr], { type: 'application/pdf' });
    this.saveFileAsPDF('myFirst.pdf',blob);
  }
  saveFileAsPDF(path,arr){
    let aTag = document.createElement("a");
    document.body.appendChild(aTag);
    aTag.href = URL.createObjectURL(arr);
    aTag.download = path;
    aTag.click();
  }
  onSelectValue(val,field){
    this.filledValues[field.fieldUUID].fieldName = field.fieldName;
    this.filledValues[field.fieldUUID].fieldValue = val;

  }

  init(fieldType){
    return this._formBuilder.group({
      cont :new FormControl('', [Validators.required]),
    })
  }

  addItem(fieldType){
    this.form.push(this.init(fieldType));
  }

  clearSignature(){
    this.signaturePad.clear();
  }
  saveSignature(){
    console.log(this.signaturePad.toDataURL());
  }
}