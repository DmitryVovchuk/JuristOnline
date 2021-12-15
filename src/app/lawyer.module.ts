import { SharedModule } from './shared/shared.module';
import { SharedSpecificModule } from './shared-specific/shared-specific.module';
import { CommonModule } from '@angular/common';
import { LawyerRoutingModule } from './lawyer.routing'
import { NgModule } from '@angular/core';
import { LawyerAnketaComponent } from './lawyer-anketa/lawyer-anketa.component';
import { MyDocumentsComponent } from './my-documents/my-documents.component';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { EditFaqsComponent } from './edit-faqs/edit-faqs.component';
import { LawyerBalanceComponent } from './lawyer-balance/lawyer-balance.component';
import { AdminMessagesComponent } from './admin-messages/admin-messages.component';
import { MyMessagesComponent } from './my-messages/my-messages.component';
import { EditAnketaComponent } from './edit-anketa/edit-anketa.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { JuristSideMenuComponent } from './jurist-side-menu/jurist-side-menu.component';

import { ClientVarFieldDialogComponent } from './client-var-field-dialog/client-var-field-dialog.component';
import { AnketaGeneralComponent } from './anketa-general/anketa-general.component';
import { AnketaLawerComponent } from './anketa-lawer/anketa-lawer.component';
import { AnketaContactsComponent } from './anketa-contacts/anketa-contacts.component';
import { CropAvatarComponent } from './crop-avatar/crop-avatar.component';
import { AnketaLawyerDiplomComponent } from './anketa-lawyer-diplom/anketa-lawyer-diplom.component';
import { DocumentCreatorComponent } from './document-creator/document-creator.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ImageCropperModule } from 'ngx-image-cropper';
@NgModule({
  imports: [
    SharedModule,
    SharedSpecificModule,
    CommonModule,
    LawyerRoutingModule,
    AngularEditorModule,
    ImageCropperModule,
    InfiniteScrollModule
  ],
  declarations: [
    LawyerAnketaComponent,
    MyDocumentsComponent,
    CreateDocumentComponent,
    EditFaqsComponent,
    LawyerBalanceComponent,
    AdminMessagesComponent,
    MyMessagesComponent,
    EditAnketaComponent,
    ClientVarFieldDialogComponent,
    AnketaGeneralComponent,
    AnketaLawerComponent,
    AnketaContactsComponent,
    CropAvatarComponent,
    AnketaLawyerDiplomComponent,
    DocumentCreatorComponent,
    JuristSideMenuComponent
  ],
  entryComponents:[ClientVarFieldDialogComponent]
})
export class LawyerModule { }
