import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientFaqSearchComponent } from '../client-faq-search/client-faq-search.component';
import { ClientDocSearchComponent } from '../client-doc-search/client-doc-search.component';
import { ClientMessagesComponent } from '../client-messages/client-messages.component';
import { BoughtDocumentsComponent } from '../bought-documents/bought-documents.component';
import { ClientLawyerSearchComponent } from '../client-lawyer-search/client-lawyer-search.component';

import { UserGuard } from '../user.guard';

const routes: Routes = [
    { path: 'clientFaqSearch', component: ClientFaqSearchComponent,canActivate:[UserGuard] },
    { path: 'clientDocSearch', component: ClientDocSearchComponent,canActivate:[UserGuard] },
    { path: 'clientLawyerSearch', component: ClientLawyerSearchComponent,canActivate:[UserGuard] },
    { path: 'clientMessages', component: ClientMessagesComponent,canActivate:[UserGuard] },
    { path: 'boughtDocument', component: BoughtDocumentsComponent,canActivate:[UserGuard] },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }