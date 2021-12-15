import { Component, Input, OnInit,ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DocumentServiceService, doc } from '../document-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog} from '@angular/material/dialog';
import { editorConfig } from '../editorConfig';
import { MatStepper } from '@angular/material/stepper';
import { ClientVarFieldDialogComponent } from '../client-var-field-dialog/client-var-field-dialog.component';
import { v4 as uuidv4 } from 'uuid';
import { testData } from '../app-testData';
import { DocumentPopupComponent } from '../document-popup/document-popup.component';
import { LawyerService } from '../lawyer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { timeout } from 'rxjs/operators';
@Component({
  selector: 'app-document-creator',
  templateUrl: './document-creator.component.html',
  styleUrls: ['./document-creator.component.scss']
})
export class DocumentCreatorComponent implements OnInit {
  @ViewChild(MatStepper,{static:false})  stepper: MatStepper;
  @ViewChild('editor') editor: any;
  @Input() documentForEdit:doc;
  editorConfig = editorConfig;
  htmlContent;
  isLinear = false;
  message = '';
  someIndex = 1;
  documentCreatrorGroup:FormGroup;
  newDoc:doc;
  showProgressBar = false;
  showMaxKeyWordExceeded = false;
  showUniqnessError = false;
  touched = false;
  currentIndex=1;
  clientVariables = [];
  content = '';
  selectedCat : any;
  categories:any;
  keyWordsArray = [];
  sameKeyWordEnter = false;
  showArray=[];
  tempKey = '';
  docCompleted = false;
  categoriesName:[string];
  numOfStep = 5;
  maxSteps = 7;
  diff=1;
  succsessMsg='';
  editorFocused = false;
  errorList = [];
  constructor(private _formBuilder: FormBuilder,
    private documentService:DocumentServiceService,
    private lawyerService:LawyerService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router:Router,
    private route: ActivatedRoute) {}

  get formArray():AbstractControl | null{
    return this.documentCreatrorGroup.get('formArray');
  }
  ngOnInit() {
    for(let i=0;i<this.maxSteps;i++){
      if(i<this.numOfStep){
        this.showArray.push(true);
      }else{
        this.showArray.push(false);
      }
    }
    this.diff= Math.floor(this.numOfStep/2);
    this.categories  = testData.categories; 
    this.categoriesName = this.categories.map((item)=>{return item.category});
    this.newDoc = this.documentService.tempDoc || {title:'',discription:'',exampleValue:'',content:'',keyWords:[],type:'',subtype:'',clientFillWord:[]}; 
    this.documentCreatrorGroup = this._formBuilder.group({
      formArray:this._formBuilder.array([
        this._formBuilder.group({title : [this.newDoc?.title || '', [Validators.maxLength(100),Validators.minLength(5),Validators.required,Validators.pattern('[А-Яа-я0-9 .]*')]]}),
        this._formBuilder.group({type : [this.newDoc?.type || '',Validators.required]}),
        this._formBuilder.group({subtype:[this.newDoc?.subtype || '',Validators.required]}),
        this._formBuilder.group({keyWords:['',[Validators.required,Validators.maxLength(100),Validators.minLength(3),Validators.pattern('[А-Яа-я0-9 .]*')]]}),
        this._formBuilder.group({discription:[this.newDoc?.discription || '', [Validators.required,Validators.maxLength(1000),Validators.minLength(5),Validators.pattern('[А-Яа-я0-9 .]*')]]}),
        this._formBuilder.group({content:[this.newDoc?.content || '',[Validators.required,Validators.maxLength(500000),Validators.minLength(100)]]}),
        this._formBuilder.group({price:[ this.newDoc?.price || '',[Validators.max(50000),Validators.min(100),Validators.required]]})
      ])
    });
    if(this.newDoc?.type){
      let selected = this.categories.find((item)=>{return item.category == this.newDoc.type});
      this.selectedCat = selected.subcategory.map((item)=>{return item.category});
      this.keyWordsArray = this.newDoc.keyWords;
      this.clientVariables = this.newDoc.clientFillWord;
      this.htmlContent = this.newDoc.content;
    }

  }

  chekIfValid(index){
    this.formArray.get([index]).markAsTouched();
    return this.formArray.get([index]).invalid;
  }
  ngOnDestroy(): void {
    this.documentService.tempDoc = {title:'',discription:'',exampleValue:'',content:'',keyWords:[],type:'',subtype:'',clientFillWord:[]};
  }

  moveStep(next,check){
    let direction = next?1:-1;
    if(next){
      this.touched = true;
    }
    this.currentIndex +=direction;
    if(this.currentIndex<= this.diff+1 &&  this.showArray[0]  || this.maxSteps - this.currentIndex<this.diff ){
      this.stepper.selectedIndex+=direction;
    }else{
      this.showArray = this.showArray.map((item,ind)=>{
        return ind>=this.currentIndex-(this.diff+1) && ind <this.currentIndex+this.diff;
      });  
      this.someIndex =  this.currentIndex - this.diff;
      this.stepper.selectedIndex = this.diff;   
    }
  }
  checkTitleUniqness(){
    if(this.chekIfValid(0)){
      return;
    }
    if(this.newDoc && this.newDoc._id && this.formArray.get([0]).pristine){
      this.moveStep(true,false);
    }
    this.showUniqnessError = false;
    this.showProgressBar = true;
    this.documentService.checkTitleUnique(this.formArray.get([0]).value)
    .subscribe((status)=>{
      this.showProgressBar = false;
      if(status == 100){
        this.moveStep(true,false);
      }else{
        this.showUniqnessError = true;
      }
    });
  }
  onBlur(){
    setTimeout(()=>{
      this.editorFocused = false;
    },100);
  }
  onFocus(){
    this.editorFocused = true;
  }
  startOver(){
    this.router.navigateByUrl('/', {skipLocationChange: true})
    .then(() => this.router.navigate(['/newDocument']));
  }
  removeKeyWord(index){  
    this.keyWordsArray.splice(index,1);
    if(this.keyWordsArray.length<10){
      this.showMaxKeyWordExceeded = false;
    }
  }

  addKeyWord(val){
    this.sameKeyWordEnter = false;
    if(this.keyWordsArray.length>=10){
      this.showMaxKeyWordExceeded = true;
      return;
    }
    if(this.keyWordsArray.some((item)=>{return item==val})){
        this.sameKeyWordEnter = true;
        return;
    }
    this.keyWordsArray.push(val);
    this.tempKey ='';
    this.formArray.get([3]).markAsUntouched();
  }

  categorySelect(val){
    let selected = this.categories.find((item)=>{return item.category == val});
    this.selectedCat = selected.subcategory.map((item)=>{return item.category});
  }

  showMessage(text,duration=3000,state=false){
    let matClass = 'mat-warn';
    if(state){
        matClass = 'mat-primary';
    }
      this._snackBar.open('Внимание!!!', text, {
        panelClass:['mat-warn'],
        duration: duration,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
  }
  completeDoc(){
    this.errorList = [];
    let doc4edit = {};
    if(this.documentCreatrorGroup.pristine || this.documentCreatrorGroup.untouched){
       this.showMessage('Не было изменений в документе...');
       return;
    }
    if(this.formArray.get([5]).touched){
      const content = this.formArray.get([5]).value.content;
      this.clientVariables = this.clientVariables.filter((item)=>{
        return content.includes(item.fieldUUID);
      });
      doc4edit['clientFillWord'] = this.clientVariables;
    }
    if(!this.clientVariables.length){
      this.showMessage('Не найденно переменных слов');
      return;
    }
    for (let i=0;i<this.maxSteps; i++) {
      let control = this.formArray.get([i]);
      if(control.touched){
        if(Object.keys(control.value)[0] == 'keyWords'){
          doc4edit['keyWords'] = this.keyWordsArray;
          continue;
        }
        doc4edit = Object.assign(doc4edit,control.value);
      }
    }
    if(this.newDoc && this.newDoc._id){
      doc4edit['_id'] = this.newDoc._id; 
    }
    this.showProgressBar = true;
    this.documentService.saveDocumentToServer(doc4edit)
    .subscribe((data)=>{
      this.showProgressBar = false;
      this.newDoc = Object.assign(this.newDoc,doc4edit);
      if(data.status=='created'){
          this.docCompleted = true;
          this.newDoc.isDocumentNew = true;
          this.newDoc._id = data.docId; 
          this.newDoc.pdfExample = data.buffer;
          if(!this.lawyerService.lawyerAnket.documents?.length){
            this.lawyerService.lawyerAnket['documents'] = [];
          }
            this.lawyerService.lawyerAnket.documents.unshift(this.newDoc)
          this.message = 'Документ успешно сохранен';
      }else if(data.status=='updated'){
          this.docCompleted = true;
          this.message = 'Документ успешно изменен';
          if(data.buffer){
            this.newDoc.pdfExample = data.buffer;
          }
      }
    },
    (err)=>{
      this.showProgressBar = false;
      if(err.error && err.error.errors && err.error.errors.length){
        this.errorList = err.error.errors.map((item)=>{
          return item.msg;
        });
      }else{
        this.showMessage('general error look at console log',3000,false);
      }
    });
  }

  decodeHtml(html) {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  showDocumentContent(){
    const dialogRef = this.dialog.open(DocumentPopupComponent,{
      disableClose: true,
      height:'90vw',
      maxWidth:'80vw',
      data:{
        doc:this.newDoc,
        lawyer:{
          avatar:this.lawyerService.lawyerAnket.avatar,
          firstName:this.lawyerService.lawyerAnket.firstName,
          lastName:this.lawyerService.lawyerAnket.lastName,
          middleName:this.lawyerService.lawyerAnket.fatherName
        }
      }
    });
    }
  showVarClientDialog(): void {
    if(!this.editorFocused){
      this.showMessage('Курсор не активен!!!...');
      return;
    }
    let uuid = uuidv4();  
    const dialogRef = this.dialog.open(ClientVarFieldDialogComponent, {
      width: '60%',
      data: this.clientVariables 
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.fieldName){
        result.realVal = '';
        this.clientVariables.push(result);   
        if(!uuid){
          this.showMessage('Переменное слово не сохранено',3000,false);
          return;
        }
        uuid = this.editor.editorToolbar.fontSize + 'x'+uuid;
        result['fieldUUID'] = uuid;
          this.editor.focus();
          this.editor.editorService.restoreSelection();
          // this.editor.editorService.insertHtml(`<u size="${uuid}"><i>${result.fieldName}</i></u>&nbsp;`);
          this.editor.editorService.insertHtml(`<font size="${uuid}"><u><i>${result.fieldName}</i></u>&nbsp;`);
          this.newDoc.clientFillWord = this.clientVariables;
          this.editor.editorService.restoreSelection();
      }
    });
  }
  insertTextAtCursor(text) {
      var sel, range;
      if (window.getSelection) {
          sel = window.getSelection();
          if (sel.getRangeAt && sel.rangeCount) {
              range = sel.getRangeAt(0);
              range.deleteContents();
              range.insertNode(document.createTextNode(text));
          }
      }
  }
}
