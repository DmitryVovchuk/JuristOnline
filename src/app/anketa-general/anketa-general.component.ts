import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City, DocumentServiceService } from '../document-service.service';
import { LawyerService } from '../lawyer.service';
import { testData} from '../app-testData';
import { StaticDataService } from '../static-data.service';
import { TranslationWidth } from '@angular/common';

@Component({
  selector: 'app-anketa-general',
  templateUrl: './anketa-general.component.html',
  styleUrls: ['./anketa-general.component.scss']
})
export class AnketaGeneralComponent implements OnInit {
  generalAnketa: FormGroup;
  reg = '';
  ct='';
  picker:Date;
  touched = false;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor(private formBuilder:FormBuilder,
              private documentService:DocumentServiceService,
              private lawyerService:LawyerService,
              private staticData:StaticDataService  ) {
   }
   selectedRegion: any;//City;
   cities: any[];//City[];
   ngOnInit() {
     this.cities = this.staticData.cities;

    this.generalAnketa = this.formBuilder.group({
      firstName: ['', [Validators.maxLength(30),Validators.required]],
      lastName: ['', [Validators.maxLength(30),Validators.required]],
      fatherName: [ '',[Validators.maxLength(30),Validators.required]],
      birthDay:['',Validators.required],
      region:['',Validators.required],
      city:['',Validators.required]
  });
  this.lawyerService.initForm(this.generalAnketa.controls);
    if(this.lawyerService.lawyerAnket){
      this.initAfter();
    }
  }
  saveAnketa(){
    this.touched = true;
    if(this.generalAnketa.invalid){
      return false;
    }
    Object.keys(this.generalAnketa.controls).forEach(item=>{
      if(this.lawyerService.lawyerAnket[item] !=this.generalAnketa.controls[item].value){
        this.lawyerService.lawyerAnketa4Update[item] = this.generalAnketa.controls[item].value;
        this.lawyerService.lawyerAnket[item] =  this.generalAnketa.controls[item].value;
      }
    });
    return true;
  }
  regionSelect(val){
    this.selectedRegion = this.cities.find(item => item.region == val);
  }
  initAfter(){
    this.generalAnketa.controls.birthDay.setValue(new Date(this.lawyerService.lawyerAnket.birthDay));
    this.regionSelect(this.lawyerService.lawyerAnket.region);
    this.generalAnketa.controls.city.setValue(this.lawyerService.lawyerAnket.city);
  }
}
