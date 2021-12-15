import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ClientRoutingModule } from './client.routing';
import { ClientSideMenuComponent } from '../client-side-menu/client-side-menu.component';
import { ClientFaqSearchComponent } from '../client-faq-search/client-faq-search.component';
import { ClientDocSearchComponent } from '../client-doc-search/client-doc-search.component';
import { ClientMessagesComponent } from '../client-messages/client-messages.component';
import { BoughtDocumentsComponent } from '../bought-documents/bought-documents.component';
import { ClientLawyerSearchComponent } from '../client-lawyer-search/client-lawyer-search.component';
import { ClientFillFieldComponent } from '../client-fill-field/client-fill-field.component';
import { LawyerAnketaListComponent } from '../lawyer-anketa-list/lawyer-anketa-list.component';

import { NoMemberMenuComponent } from '../no-member-menu/no-member-menu.component';
import { NomSearchFaqComponent } from '../nom-search-faq/nom-search-faq.component';
import { NomSearchDocumentsComponent } from '../nom-search-documents/nom-search-documents.component';
import { NomSearchLawyersComponent } from '../nom-search-lawyers/nom-search-lawyers.component';

@NgModule({
  imports:[
    SharedModule,
    CommonModule,
    ClientRoutingModule
  ],
  declarations: [
    ClientSideMenuComponent,
    ClientFaqSearchComponent,
    ClientDocSearchComponent,
    ClientMessagesComponent,
    ClientLawyerSearchComponent,
    ClientFillFieldComponent,
    BoughtDocumentsComponent,
    LawyerAnketaListComponent,
    NoMemberMenuComponent,
    NomSearchFaqComponent,
    NomSearchDocumentsComponent,
    NomSearchLawyersComponent
  ]
})
export class ClientModule { }
