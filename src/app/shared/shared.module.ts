import { NgModule } from '@angular/core';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FaqListComponent } from '../faq-list/faq-list.component';
import { ImageSelectorComponent } from '../image-selector/image-selector.component'
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SignaturePadModule } from 'angular2-signaturepad';
import { DocumentPopupComponent } from '../document-popup/document-popup.component';
import { DocumentFillerComponent } from '../document-filler/document-filler.component';
import { MessageListComponent } from '../message-list/message-list.component';
import { MsgPopupComponent } from '../msg-popup/msg-popup.component';
import { LawyerDocumentsComponent } from '../lawyer-documents/lawyer-documents.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LawyerAnketaItemComponent } from '../lawyer-anketa-item/lawyer-anketa-item.component';
import {MatBadgeModule} from '@angular/material/badge';
import { RouterModule } from '@angular/router';
export const CUSTOM_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/DD/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    /* monthYearLabel: 'MMMM YYYY', */
    dateA11yLabel: 'DD/MM/YYYY',
    /* monthYearA11yLabel: 'MMMM YYYY', */
  },
};
export class CustomDateAdapter extends NativeDateAdapter {
  parse(value: any): Date | null {
    if (!value) { return null; }
    return this.toDate(value);
  }

  private toDate(dateStr) {
    const [day, month, year] = dateStr.split(/[-\/.]/);
    if(!day || +day<1 || +day>31) return null;
    if(!Number.isInteger(+month) || +month<0 || +month>12) return null;
    if(!year || +year<1900 || +year >2100) return null;
    return new Date(year, month - 1, day);
  }
}
@NgModule({
  imports:[
    CommonModule,
    RouterModule,
    MatSelectModule,
    MatCarouselModule,
    MatStepperModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatTooltipModule,
    SignaturePadModule,
    PdfViewerModule,
    MatSnackBarModule,
    FormsModule,
    CarouselModule,
    ReactiveFormsModule
  ],
  declarations: [
    LawyerAnketaItemComponent,
    HeaderComponent,
    FooterComponent,
    ImageSelectorComponent,
    FaqListComponent,
    DocumentPopupComponent,
    DocumentFillerComponent,
    MessageListComponent,
    MsgPopupComponent,
    LawyerDocumentsComponent
  ],
  exports: [
    LawyerAnketaItemComponent,
    DocumentPopupComponent,
    DocumentFillerComponent,
    MessageListComponent,
    MsgPopupComponent,
    LawyerDocumentsComponent,
    HeaderComponent,
    FooterComponent,
    ImageSelectorComponent,
    PdfViewerModule,
    SignaturePadModule,
    FaqListComponent,
    //////////////////////
    ReactiveFormsModule,
    FormsModule,
    //////////////////
    CarouselModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatRadioModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatInputModule ,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatBadgeModule,
    MatStepperModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCarouselModule
  ],
  entryComponents:[DocumentPopupComponent,MsgPopupComponent],
  providers:[
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    {provide: DateAdapter, useClass: CustomDateAdapter },
    {provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMAT }
  ]
})
export class SharedModule { }
