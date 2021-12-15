import { testData } from '../app-testData';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-no-member-menu',
  templateUrl: './no-member-menu.component.html',
  styleUrls: ['./no-member-menu.component.scss']
})
export class NoMemberMenuComponent implements OnInit {
  subMenu1 = true;
  showMenu = false;
  categories = testData.categories;
  selection = '';
  constructor() { }

  ngOnInit(): void {
  }
  showSubMenu(){
    this.subMenu1=true;
  }
  showPopUp(){
    this.showMenu = true;
  }
  closePopUp(){
    this.showMenu = false;
  }

}
