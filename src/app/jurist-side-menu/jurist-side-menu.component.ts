import { Component, Input, OnInit } from '@angular/core';
import { LawyerService } from '../lawyer.service';

@Component({
  selector: 'app-jurist-side-menu',
  templateUrl: './jurist-side-menu.component.html',
  styleUrls: ['./jurist-side-menu.component.scss']
})
export class JuristSideMenuComponent implements OnInit {
  @Input() tabindex;
  showMenu = false;
  activeTab = [];
  msgCount:any;
  constructor(private lawyerService:LawyerService) { }

  showPopUp(){
    this.showMenu = true;
  }

  closePopUp(){
    this.showMenu = false;
  }

  ngOnInit(): void {
    this.msgCount = this.lawyerService.msgCounts;
    this.tabindex = this.tabindex || 0;
    this.activeTab[this.tabindex] = true;
  }

}
