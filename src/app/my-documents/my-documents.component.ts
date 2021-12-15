import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocumentPopupComponent } from '../document-popup/document-popup.component';
import { DocumentServiceService } from '../document-service.service';
import { LawyerService } from '../lawyer.service';

@Component({
  selector: 'app-my-documents',
  templateUrl: './my-documents.component.html',
  styleUrls: ['./my-documents.component.scss']
})
export class MyDocumentsComponent implements OnInit,OnDestroy {
  showDocumentEdit = false;
  lawyerDocuments=[];
  docForEdit : any;
  constructor(private matDialog:MatDialog,private lawyerService:LawyerService,private documentService:DocumentServiceService) { }

  ngOnInit(): void {
    this.lawyerDocuments = this.lawyerService.lawyerAnket.documents;
  }
  ngOnDestroy(): void {
    this.documentService.tempDoc=null;
  }
  showDocumentContent(doc){
    const dialogRef = this.matDialog.open(DocumentPopupComponent,{
      height:'90vw',
      maxWidth:'80vw'
    });
    dialogRef.afterClosed().subscribe((res)=>{
      console.log('document dialog closing');
    });
  }
  showEditor(doc){
    this.documentService.tempDoc = doc;
    this.showDocumentEdit = true;
  }
}
