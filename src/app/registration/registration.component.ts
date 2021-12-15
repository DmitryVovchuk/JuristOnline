import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UrlSegment } from '@angular/router';
import { LoginModelService, User } from '../login-model.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private loginServie:LoginModelService,private formBuilder:FormBuilder) { }
  userType = '';
  selectedUserType = '';
  showContract = false;
  submitted=false;
  showError = false;
  showSuccsses = false;
  errorMessage = '';
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      contract:[false,[Validators.requiredTrue]],
      usertypectrl:['',[Validators.required]]
    });
  }
  openContractDialog(){
    
  }
  get f(){
    return this.loginForm.controls;
  }
  userTypeSelect(type){
    this.selectedUserType = type;
    this.userType = type == 'Юрист' ? '2':'1';
  }
  registerUser(){
    this.submitted = true;
    this.showError = false;
    if(this.loginForm.invalid){
      return;
    }
    let user = new User();
    user.password = this.f.password.value;
    user.username = this.f.email.value;
    user.userType = this.userType;
    this.loginServie.register(user)
    .subscribe((data)=>{
      let code = data.code;
      if(code==100){
        this.showSuccsses = true;
        this.errorMessage = data.msg;
      }else{
        this.showError = true;
        this.errorMessage = data.msg;
      }
    })
  }
  goToBlock(event){
    console.log(event);
  }
}
