import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LawyerService } from '../lawyer.service';

@Component({
  selector: 'app-anketa-contacts',
  templateUrl: './anketa-contacts.component.html',
  styleUrls: ['./anketa-contacts.component.scss']
})
export class AnketaContactsComponent implements OnInit {
  anketaContacts:FormGroup;
  touched = false;
  constructor(private formBuilder: FormBuilder,private lawyerService:LawyerService) { }

  ngOnInit() {
    //HUI
    this.anketaContacts = this.formBuilder.group({
      phoneNumber:['',Validators.required],
      cellPhone:['',Validators.maxLength(10)],
      officeAddress:['',Validators.maxLength(100)],
      email:['',[Validators.email,Validators.required]],
      linkLawyerSite:['',Validators.maxLength(100)],
      odnoklassiki:['',Validators.maxLength(100)],
      vk:['',Validators.maxLength(100)],
      facebook:['',Validators.maxLength(100)]
    });
    this.lawyerService.initForm(this.anketaContacts.controls);
  }

  saveAnketa(){
    if(this.anketaContacts.invalid){
      this.touched = true;
      return false;
    }
    Object.keys(this.anketaContacts.controls).forEach(item=>{
      if(this.anketaContacts.controls[item].valid){
        if(this.lawyerService.lawyerAnket[item] != this.anketaContacts.controls[item].value){
          this.lawyerService.lawyerAnketa4Update[item] = this.anketaContacts.controls[item].value;
          this.lawyerService.lawyerAnket[item] =  this.anketaContacts.controls[item].value;
        }
      }     
    });
    return true;
  }

}
