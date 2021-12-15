import { Component, OnInit } from '@angular/core';
import { testData } from '../app-testData';
import { LawyerService } from '../lawyer.service';
import { MsgService } from '../msg.service';
@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.scss']
})
export class MyMessagesComponent implements OnInit {
  messages = [];
  constructor(private msgService:MsgService,
              private lawyerService:LawyerService) { }

  ngOnInit(): void {
    this.messages = this.lawyerService.lawyerMessages.map((item)=>{
      item.messages = item.messages.reverse();
      return item;
   });
  }
  fetchMoreMsg(){
    this.msgService.getMyMessages(this.messages.length)
    .subscribe((data)=>{
      this.messages = data.data.reverse();
    });
  }
}
