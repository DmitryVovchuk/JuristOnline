import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { testData } from '../app-testData';
import { DocumentPopupComponent } from '../document-popup/document-popup.component';
import { IFaq } from '../faq-list/faq-list.component';
import { HomePageDataService } from '../home-page-data.service';
import { LawyerService } from '../lawyer.service';
import { LoginModelService } from '../login-model.service';
import { MsgPopupComponent } from '../msg-popup/msg-popup.component';
import { MsgService } from '../msg.service';
import { StaticDataService } from '../static-data.service';
@Component({
  selector: 'app-lawyer-anketa',
  templateUrl: './lawyer-anketa.component.html',
  styleUrls: ['./lawyer-anketa.component.scss']
})
export class LawyerAnketaComponent implements OnInit {
  showTabArray = [true,false,false,false];
  faqsHp:IFaq[]=[];
  lawyerData:any;
  lawyerDocuments = testData.lawyerDocuments;
  constructor(private lawyerService:LawyerService,
              private hpDataService:HomePageDataService,
              private matDialog:MatDialog,
              private msgService:MsgService,
              private staticData:StaticDataService,
              private loginService:LoginModelService) { }

  ngOnInit(): void {
    this.lawyerData = this.lawyerService.lawyerAnket;
    if(!this.staticData.cities.length){
      this.staticData.getCities().subscribe((data)=>{});
    }
    this.hpDataService.getFaqs().subscribe(
      (data)=>{
        this.faqsHp = data;
      },
      (err)=>{}
    );
    if(!this.lawyerService.lawyerAdminMessages.length && !this.lawyerService.lawyerMessages.length){
      this.msgService.getMyMessages()
      .subscribe((data)=>{
        if(data && data.data){
          data.data.forEach(element => {
            if(element.messageType == "admin"){
              this.lawyerService.lawyerAdminMessages.push(element);
              if(element.messageStatus.length == 24 && element.messageStatus != this.loginService.userId){
                this.lawyerService.msgCounts.newLawyerAdminCount++;
              }
            }else{
              this.lawyerService.lawyerMessages.push(element);
              if(element.messageStatus.length == 24 && element.messageStatus != this.loginService.userId){
                this.lawyerService.msgCounts.newLawyerMsgCount++;
              }
            }
          });
        }
      });
    }
  }

  showContent(tabIndex){
    this.showTabArray = this.showTabArray.map((item,i)=>{
      if(i == tabIndex) item = true;
      else item = false;
      return item;
    })
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

  showMsgDialog(){
    const dialogRef = this.matDialog.open(MsgPopupComponent,{
      maxHeight:'90vw',
      maxWidth:'80vw'
    });
    dialogRef.afterClosed().subscribe((res)=>{
      console.log('msg dialog closing');
    });
  }

}
