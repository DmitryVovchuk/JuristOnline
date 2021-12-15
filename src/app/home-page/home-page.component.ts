import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientVarFieldDialogComponent } from '../client-var-field-dialog/client-var-field-dialog.component';
import {IFaq} from '../faq-list/faq-list.component'; 
import { HomePageDataService } from '../home-page-data.service';
import { StaticDataService } from '../static-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @ViewChild('ankets', { static: true }) ankets: ElementRef;
  @ViewChild('consult', { static: true }) consult: ElementRef;
  @ViewChild('documents', { static: true }) documents: ElementRef;
  @ViewChild('join', { static: true }) join: ElementRef;
  @ViewChild('faq', { static: true }) faq: ElementRef;
  @ViewChild('why', { static: true }) why: ElementRef;
  @ViewChild('block', { static: true }) block: ElementRef;
  faqsHp:IFaq[]=[];
  constructor(private hpDataService:HomePageDataService,
              private matDialog:MatDialog,
              private staticData:StaticDataService) { }

  ngOnInit(): void {
     this.hpDataService.getFaqs().subscribe(
      (data)=>{
        this.faqsHp = data;
        console.log('data : '+data);
      },
      (err)=>{}
    );
    this.staticData.getCities().subscribe(
      (data)=>{

      }
    );
    this.staticData.getmsgcategories().subscribe(()=>{});
    
  }

  ngAfterViewInit(): void {
  }
  
  showClientVarDialog(){
    const dialogRef = this.matDialog.open(ClientVarFieldDialogComponent,{
      height:'90vw',
      maxWidth:'80vw'
    });
  }
  goToBlock(event){
    console.log(event);
    this[event].nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
