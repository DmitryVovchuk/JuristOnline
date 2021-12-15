import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-side-menu',
  templateUrl: './client-side-menu.component.html',
  styleUrls: ['./client-side-menu.component.scss']
})
export class ClientSideMenuComponent implements OnInit {
  @Input() tabindex;
  showMenu = false;
  activeTab = [];
  constructor() { }
  showPopUp(){
    this.showMenu = true;
  }
  closePopUp(){
    this.showMenu = false;
  }
  ngOnInit(): void {
    this.tabindex = this.tabindex || 0;
    this.activeTab[this.tabindex] = true;
  }

}
