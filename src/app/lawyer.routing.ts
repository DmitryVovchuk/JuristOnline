import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LawyerAnketaComponent } from './lawyer-anketa/lawyer-anketa.component';
import { MyDocumentsComponent } from './my-documents/my-documents.component';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { EditFaqsComponent } from './edit-faqs/edit-faqs.component';
import { LawyerBalanceComponent } from './lawyer-balance/lawyer-balance.component';
import { AdminMessagesComponent } from './admin-messages/admin-messages.component';
import { MyMessagesComponent } from './my-messages/my-messages.component';
import { EditAnketaComponent } from './edit-anketa/edit-anketa.component';
import { LawyerGuard } from './lawyer.guard';
import { LawyerService } from './lawyer.service';

const routes: Routes = [
    { path: '' ,redirectTo:'lawyerAnketa',canActivate:[LawyerGuard]},
    { path: 'lawyerAnketa', component: LawyerAnketaComponent,canActivate:[LawyerGuard]},
    { path: 'lawyerDocuments', component: MyDocumentsComponent,canActivate:[LawyerGuard] },
    { path: 'newDocument', component: CreateDocumentComponent,canActivate:[LawyerGuard] },
    { path: 'editFaqs', component: EditFaqsComponent},//,canActivate:[LawyerGuard] },
    { path: 'lawyerBalance', component: LawyerBalanceComponent,canActivate:[LawyerGuard] },
    { path: 'adminMessages', component: AdminMessagesComponent,canActivate:[LawyerGuard] },
    { path: 'myMessages', component: MyMessagesComponent,canActivate:[LawyerGuard] },
    { path: 'editAnketa', component: EditAnketaComponent,canActivate:[LawyerGuard] }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LawyerRoutingModule { }