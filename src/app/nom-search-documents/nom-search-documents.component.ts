import { Component, OnInit } from '@angular/core';
import { testData } from '../app-testData';

@Component({
  selector: 'app-nom-search-documents',
  templateUrl: './nom-search-documents.component.html',
  styleUrls: ['./nom-search-documents.component.scss']
})
export class NomSearchDocumentsComponent implements OnInit {
  lawyerDocuments = testData.lawyerDocuments;
  constructor() { }

  ngOnInit(): void {
  }

}
