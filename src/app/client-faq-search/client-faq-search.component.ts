import { Component, OnInit } from '@angular/core';
import { IFaq } from '../faq-list/faq-list.component';
import { HomePageDataService } from '../home-page-data.service';

@Component({
  selector: 'app-client-faq-search',
  templateUrl: './client-faq-search.component.html',
  styleUrls: ['./client-faq-search.component.scss']
})
export class ClientFaqSearchComponent implements OnInit {
  faqsHp:IFaq[]=[];
  constructor(private hpDataService:HomePageDataService) { }

  ngOnInit(): void {
    this.hpDataService.getFaqs().subscribe(
      (data)=>{
        this.faqsHp = data;
        console.log('data : '+data);
      },
      (err)=>{}
    );
  }

}
