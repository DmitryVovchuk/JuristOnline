import { Component, HostListener, Input, OnInit,ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DocumentServiceService, doc, TreeData } from '../document-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog} from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { DocumentPopupComponent } from '../document-popup/document-popup.component';
import { LawyerService } from '../lawyer.service';

@Component({
  selector: 'app-create-new-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.scss']
})
export class CreateDocumentComponent implements OnInit {
  @ViewChild(MatStepper,{static:true})  stepper: MatStepper;
  @Input() document:any;
  newDoc:doc;
   showProgressBar = false;
  constructor(private _formBuilder: FormBuilder,
    private documentService:DocumentServiceService,
    private lawyerService:LawyerService,
    private _snackBar: MatSnackBar,
    private  dialog: MatDialog) {}

  ngOnInit() {
     this.newDoc = this.documentService.tempDoc; 
  }

  showDocumentContent(){
    const dialogRef = this.dialog.open(DocumentPopupComponent,{
      disableClose:true,
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
}