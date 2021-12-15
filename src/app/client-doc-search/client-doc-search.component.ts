import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocumentPopupComponent } from '../document-popup/document-popup.component';

@Component({
  selector: 'app-client-doc-search',
  templateUrl: './client-doc-search.component.html',
  styleUrls: ['./client-doc-search.component.scss']
})
export class ClientDocSearchComponent implements OnInit {

  constructor(private matDialog:MatDialog) { }
  lawyerDocuments = [{
    title:'fist document',
    subtype:'prava',
    price:'250',
    icon:'../../assets/img/hone.svg'
  },{
    title:'second document',
    subtype:'dengi',
    price:'250',
    icon:'../../assets/img/hone.svg'
  },{
    title:'third document',
    subtype:'zemlya',
    price:'250',
    icon:'../../assets/img/hone.svg'
  }];
  ngOnInit(): void {
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

}
