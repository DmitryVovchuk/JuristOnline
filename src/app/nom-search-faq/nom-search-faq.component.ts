import { Component, OnInit } from '@angular/core';
import { IFaq } from '../faq-list/faq-list.component';
import { HomePageDataService } from '../home-page-data.service';

@Component({
  selector: 'app-nom-search-faq',
  templateUrl: './nom-search-faq.component.html',
  styleUrls: ['./nom-search-faq.component.scss']
})
export class NomSearchFaqComponent implements OnInit {
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
