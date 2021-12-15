import { Component, EventEmitter, Input, OnInit, Output, SystemJsNgModuleLoader } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocumentPopupComponent } from '../document-popup/document-popup.component';
import { DocumentServiceService } from '../document-service.service';

@Component({
  selector: 'app-lawyer-documents',
  templateUrl: './lawyer-documents.component.html',
  styleUrls: ['./lawyer-documents.component.scss']
})
export class LawyerDocumentsComponent implements OnInit {
  @Input() lawyerDocuments:[]
  @Input() showSearchBar = false;
  @Input() isLawyerMode = false;
  @Output() showDocumentEditor = new EventEmitter();
  showProgressBar = false;
  constructor(private matDialog:MatDialog,
              private documentService:DocumentServiceService) { }

  ngOnInit(): void {
  }
  editDoc(event,doc){
    event.stopPropagation();
    this.showDocumentEditor.emit(doc)
  }
  showDocumentContent(doc){
    this.showProgressBar = true;
    this.documentService.getDocumentById({'docId':doc._id})
    .subscribe((res)=>{
      this.showProgressBar = false;
      const dialogRef = this.matDialog.open(DocumentPopupComponent,{
        disableClose: true,
        height:'90vw',
        width:'90em',
        data:{
          doc:res.data,
          lawyer:{
            avatar:res.data.lawyerId.avatar,
            firstName:res.data.lawyerId.firstName,
            lastName:res.data.lawyerId.lastName,
            middleName:res.data.lawyerId.fatherName
          }
        }
      });
    },
    (err)=>{
        console.log(err);
        this.showProgressBar = true;
    });

  }
}
