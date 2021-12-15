import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   @Output() scrollToView  = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  goToHtmlTag(htmlTag){
    this.scrollToView.emit([htmlTag]);
  }
}
