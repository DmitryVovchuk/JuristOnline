import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City, DocumentServiceService } from '../document-service.service';
import { LawyerService } from '../lawyer.service';
import { testData } from '../app-testData';
@Component({
  selector: 'app-anketa-lawer',
  templateUrl: './anketa-lawer.component.html',
  styleUrls: ['./anketa-lawer.component.scss']
})
export class AnketaLawerComponent implements OnInit {
  anketaLawyer:FormGroup;
  constructor(private documetService:DocumentServiceService,
              private formBuilder:FormBuilder,
              private lawyerService: LawyerService) { }
  categories :string[];
  minorCat : string[];
  sub : string[] = [];
  picker : Date;
  checked = false;
  touched = false;
  ngOnInit() {
    this.anketaLawyer = this.formBuilder.group({
      university:[Validators.maxLength(50),Validators.required],
      dateOfComplition:['',Validators.required],
      resume:['',[Validators.maxLength(10000),Validators.required]],
      expireance:['',Validators.required],
      lawyerLicence:[false]
  });
    this.categories = testData.categories.map(item=>item.category);//this.documetService.categories.map(item=>item.category);
    this.lawyerService.initForm(this.anketaLawyer.controls);
    this.sub = this.lawyerService.lawyerAnket.categories || [];
  }

  saveAnketa(){
    if(this.anketaLawyer.invalid || !this.sub.length){
      this.touched = true;
      return false;
    }
    Object.keys(this.anketaLawyer.controls).forEach(item=>{
      
      if(this.anketaLawyer.controls[item].valid && this.lawyerService.lawyerAnket[item] !=this.anketaLawyer.controls[item].value){
        this.lawyerService.lawyerAnket[item] =  this.anketaLawyer.controls[item].value;
        this.lawyerService.lawyerAnketa4Update[item] = this.anketaLawyer.controls[item].value;
      }
    });
    this.lawyerService.lawyerAnket.categories = this.categories;
    return true;
  }

  additionalSelect(){
    this.lawyerService.lawyerAnket.categories = [...this.sub];
  }

}
