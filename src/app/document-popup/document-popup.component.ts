import { Component, Inject, OnInit, TRANSLATIONS, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-document-popup',
  templateUrl: './document-popup.component.html',
  styleUrls: ['./document-popup.component.scss']
})
export class DocumentPopupComponent implements OnInit {
  @ViewChild(PdfViewerComponent) private pdfComponent: PdfViewerComponent;
  showProgressBar = false;
  showDocumentFiller = false;
  subjectDebounce: Subject<string> = new Subject<string>();
  renderText = true;
  showButton = false;
  name = '';
  constructor(
    public dialogRef: MatDialogRef<DocumentPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.showProgressBar = true;
    this.name =  `${this.data.lawyer.lastName || ''} ${this.data.lawyer.firstName|| ''} ${this.data.lawyer.fatherName || ''}`;
    this.subjectDebounce.pipe(debounceTime(200))
    .subscribe(()=>{
      this.nextMatch();
    });
  }
  pageRendered(e: CustomEvent) {
    this.showProgressBar = false;
    this.showButton = true;
    this.pdfComponent.pdfViewer.eventBus.on('updatefindmatchescount', data => {
      this.subjectDebounce.next('');
  });
  }
  fillDocument(){
    this.showDocumentFiller = true;
    if(this.data.doc.clientFillWord.length){
      this.search(this.data.doc.clientFillWord[0].fieldName);
    }
  }
  serchVarieables(searchWord:string){
    this.search(searchWord);
  }
  search(stringToSearch: string) {
    
    this.pdfComponent.pdfFindController.executeCommand('find', {
      caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true, query: stringToSearch
    });
  }
  nextMatch() { 
    let selected = document.querySelector<HTMLElement>('.highlight.selected') ; 
    if(!selected) return;
    selected.style.border='2px solid #065684';
    selected.scrollIntoView(); 
  }
  showSpinner(event){
    this.showProgressBar = event;
  }

  documentChanged(doc){
    this.data.doc = doc;
  }

  onNoClick(): void {
    this.dialogRef.close({});
  }
}
