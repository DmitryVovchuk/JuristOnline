import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocumentPopupComponent } from '../document-popup/document-popup.component';
import { MsgPopupComponent } from '../msg-popup/msg-popup.component';
import { LawyerService } from '../lawyer.service';
import { StaticDataService } from '../static-data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-lawyer-anketa-item',
  templateUrl: './lawyer-anketa-item.component.html',
  styleUrls: ['./lawyer-anketa-item.component.scss']
})
export class LawyerAnketaItemComponent implements OnInit {
  @Input() lawyerData:any;
  @Input() alwaysOpen:boolean;
  showAnketaContent = false;
  showTabArray = [true,false,false,false];
  formatedDate = '';
  age:Number;
  lawyerDocuments=[];
  lawyerLicence = false;
  slides = [];
  lawyerFaqs=[];
  customOptions: OwlOptions;
  constructor(private matDialog:MatDialog,
              private lawyerService:LawyerService,
              private staticData:StaticDataService) { }

  ngOnInit(): void {
    this.customOptions = this.staticData.customOptions;
    this.lawyerDocuments = this.lawyerData.documents || [];
    this.slides = this.lawyerData.diploms || [];
    this.age = this.calculateAge(new Date(this.lawyerData.birthDay));
    this.lawyerLicence = this.lawyerData.lawyerLicence;
    this.formatedDate = (new Date(this.lawyerData.dateOfComplition)).toLocaleDateString('en-GB');
    this.lawyerFaqs = this.lawyerData.lawyerFAQs.map((item)=>{
      return {answer : item.answer, question:item.question,authorImg:this.lawyerData.avatar,categ:item.categ,_id:item._id,status:item.status};
    }) || [];
    this.lawyerService.lawyerFaqs = this.lawyerFaqs;
  }
  calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
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
      disableClose:true,
      maxHeight:'90vw',
      maxWidth:'80vw',
      data:{
        lawyerId:this.lawyerData._id,
        lawyerCategories:this.lawyerData.categories
      }
    });
    dialogRef.afterClosed().subscribe((res)=>{
      console.log('msg dialog closing');
    });
  }

}
