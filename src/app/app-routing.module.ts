import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SuccessLoginComponent } from './success-login/success-login.component';
import { PreloadAllModules } from "@angular/router";

// import { LawyerAnketaComponent } from './lawyer-anketa/lawyer-anketa.component';
// import { MyDocumentsComponent } from './my-documents/my-documents.component';
// import { CreateDocumentComponent } from './create-document/create-document.component';
// import { EditFaqsComponent } from './edit-faqs/edit-faqs.component';
// import { LawyerBalanceComponent } from './lawyer-balance/lawyer-balance.component';
// import { AdminMessagesComponent } from './admin-messages/admin-messages.component';
// import { MyMessagesComponent } from './my-messages/my-messages.component';
// import { EditAnketaComponent } from './edit-anketa/edit-anketa.component';
// import { LawyerAnketaListComponent } from './lawyer-anketa-list/lawyer-anketa-list.component';

// import { ClientFaqSearchComponent } from './client-faq-search/client-faq-search.component';
// import { ClientDocSearchComponent } from './client-doc-search/client-doc-search.component';
// import { ClientLawyerSearchComponent } from './client-lawyer-search/client-lawyer-search.component';
// import { ClientMessagesComponent } from './client-messages/client-messages.component';
// import { BoughtDocumentsComponent } from './bought-documents/bought-documents.component';

import { NomSearchFaqComponent } from './nom-search-faq/nom-search-faq.component';
import { NomSearchDocumentsComponent } from './nom-search-documents/nom-search-documents.component';
import { NomSearchLawyersComponent } from './nom-search-lawyers/nom-search-lawyers.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
//import { LawyerGuard } from './lawyer.guard';
//import { UserGuard } from './user.guard';


  const routes: Routes = [
    {path : '',component: HomePageComponent},
    // { path: '', redirectTo: '/homePage', pathMatch: 'full' },
    { path: 'lawyer', loadChildren: () => import(`./lawyer.module`).then(m => m.LawyerModule) },
    { path: 'client', loadChildren: () => import(`./client/client.module`).then(m => m.ClientModule) },
    { path: 'homePage', component: HomePageComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'successLogin/:id', component: SuccessLoginComponent },
    { path: 'confirmation/:token',component:EmailConfirmationComponent}

    // { path: 'lawyerAnketa', component: LawyerAnketaComponent,canActivate:[LawyerGuard]},
    // { path: 'lawyerDocuments', component: MyDocumentsComponent,canActivate:[LawyerGuard] },
    // { path: 'newDocument', component: CreateDocumentComponent,canActivate:[LawyerGuard] },
    // { path: 'editFaqs', component: EditFaqsComponent,canActivate:[LawyerGuard] },
    // { path: 'lawyerBalance', component: LawyerBalanceComponent,canActivate:[LawyerGuard] },
    // { path: 'adminMessages', component: AdminMessagesComponent,canActivate:[LawyerGuard] },
    // { path: 'myMessages', component: MyMessagesComponent,canActivate:[LawyerGuard] },
    // { path: 'editAnketa', component: EditAnketaComponent,canActivate:[LawyerGuard] },



    // { path: 'nomFaqSearch', component: NomSearchFaqComponent },
    // { path: 'nomDocSearch', component: NomSearchDocumentsComponent },
    // { path: 'nomLawyerSearch', component: NomSearchLawyersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // Tell the router to use the HashLocationStrategy.
    useHash: true,
    enableTracing: false,
  
    // This will tell Angular to preload the lazy-loaded routes after the
    // application has been bootstrapped. This will extend to both top-level
    // and nested lazy-loaded modules.
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppRoutingModule { }
