import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnketaGeneralComponent } from '../anketa-general/anketa-general.component';
import { AnketaLawerComponent } from '../anketa-lawer/anketa-lawer.component';
import { AnketaContactsComponent } from '../anketa-contacts/anketa-contacts.component';
import { LawyerService } from '../lawyer.service';
import { SimpleSnackBar, MatSnackBar } from '@angular/material/snack-bar';
import { CropAvatarComponent } from '../crop-avatar/crop-avatar.component';
import { AnketaLawyerDiplomComponent } from '../anketa-lawyer-diplom/anketa-lawyer-diplom.component';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-edit-anketa',
  templateUrl: './edit-anketa.component.html',
  styleUrls: ['./edit-anketa.component.scss']
})
export class EditAnketaComponent implements OnInit {
  @ViewChild ('general',{static: false}) general:AnketaGeneralComponent;
  @ViewChild ('prof',{static:false}) prof: AnketaLawerComponent;
  @ViewChild ('contact',{static:false}) contact: AnketaContactsComponent;
  @ViewChild ('crop',{static:false}) crop: CropAvatarComponent;
  @ViewChild ('diploms',{static:false}) diploms : AnketaLawyerDiplomComponent;
  showProgressBar = false;
  generalData: FormGroup;
  lawyerData:FormGroup;
  lawyerGrammar:FormGroup;
  avatarCrop:FormGroup;
  contactData:FormGroup;
  cropMessage = '';
  showCropError = false;
  constructor(private _formBuilder: FormBuilder,
              private lawyerService:LawyerService,
              private _snackBar:MatSnackBar) { }

  ngOnInit() {
    this.generalData = this._formBuilder.group({
      general: []
    });
    this.avatarCrop = this._formBuilder.group({
      avatar: []
    });
    this.lawyerData = this._formBuilder.group({
      resume:[]
    });
    this.contactData = this._formBuilder.group({
      contactData:[]
    });
    this.lawyerGrammar = this._formBuilder.group({
      diplom:[]
    });
  }

  saveAvatar(stepper: MatStepper){
    if(!this.lawyerService.lawyerAnket.avatar && ( !this.crop.croppedImage || !this.crop.isChanged)){
      this.showCropError = true;
      this.cropMessage = 'Фото не выбранно';
      return;
    }
   this.crop.updateAvatar()
   .subscribe((data)=>{
     let avatar = this.crop.croppedImage;
     this.lawyerService.lawyerAnket.avatar = avatar;
     stepper.next();
  },
  (err)=>{
    this.showSnackMessage(err.message,'error');
    //stepper.next(); //for debugging only
    this.showCropError = true;
    this.cropMessage = 'Произошла ошибка при загрузке фото';
  });
  }
  callToChildSave(child,stepper: MatStepper){
    if(this[child].saveAnketa()){
      stepper.next();
    }
  }

  showSnackMessage(msg:string,type='success',duration = 3000){
    let cssClass = 'green-snackbar';
      if(type=='error'){
        cssClass = 'red-snackbar';
      }
      this._snackBar.open('Внимание!!!',msg , {
        duration: duration,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: [cssClass]
      });
  }

  saveToServer(){
    this.showProgressBar = true;
    this.diploms.saveDiploms();
    this.lawyerService.udateAnketa(this.lawyerService.lawyerAnketa4Update).subscribe(
        (data)=>{
          this.showProgressBar = false;
          this.showSnackMessage('Ваши данные успешно сохранены');
        },
        (err)=>{
          this.showProgressBar = false;
          let errorMessage = 'Unknown error occured';
          if(err.error && err.error.errors && err.error.errors.length && err.error.errors[0].msg){
            errorMessage = err.error.errors[0].msg;
          }
          this.showSnackMessage(errorMessage,'error');
        });
  }
}
