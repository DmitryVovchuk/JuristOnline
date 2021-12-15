import { Component, OnInit } from '@angular/core';
import { testData } from '../app-testData';

@Component({
  selector: 'app-client-messages',
  templateUrl: './client-messages.component.html',
  styleUrls: ['./client-messages.component.scss']
})
export class ClientMessagesComponent implements OnInit {

  messages = [];
  constructor() { }

  ngOnInit(): void {
    this.messages = testData.messagesData;
  }
}
