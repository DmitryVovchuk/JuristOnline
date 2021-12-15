import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoginModelService } from '../login-model.service';
import { GoogleLoginProvider, FacebookLoginProvider, VKLoginProvider } from 'angularx-social-login';
import { LawyerService } from '../lawyer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  errorMessage:string;
  submitted = false;
  showError = false;
  showProgressBar = false;
  constructor(    private loginService:LoginModelService,
    private lawyerService:LawyerService,
    private router:Router,
    private route: ActivatedRoute,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f(){
    return this.loginForm.controls;
  }
  googleLogin(){
    this.loginService.loginGoogle()
    .subscribe((usr)=>{
      console.log(usr);
    }
    ,(err)=>{console.log('err')})
  }
  signInWithGoogle(): void {
    //this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signInWithFB(): void {
  //  this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signInWithVK(): void {
  //  this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  goToBlock(event){
    console.log(event);
  }

  validateInput():boolean{
    return true;
  }

  login(): void {
  this.submitted = true;
  if(this.loginForm.invalid){
    return;
  }
  this.showProgressBar = true;
  this.loginService.login(this.f.email.value,this.f.password.value)
  .pipe(first())
  .subscribe(
      data => {
        this.showProgressBar = false;
        if(data.code==101){
          this.loginService.userId = data.userId;
          if(data.userType == '2'){
            this.loginService.lawyerLogedIn = true;
            this.lawyerService.getLawerAnketa(data.session)
            .subscribe((data)=>{
              if(data && data.data){
                this.lawyerService.lawyerAnket = data.data;
              }
              this.router.navigate(['../lawyer'],{ relativeTo: this.route });
           //   this.router.navigate(['/lawyerAnketa'], { relativeTo: this.route });
            });

          }
          else{
            this.loginService.userLogedIn = true;
            this.router.navigate(['./clientSpace'], { relativeTo: this.route });
          }
        }else{
          this.showError = true;
          this.errorMessage = data.msg;
        }
      },
      error => {
        this.showProgressBar = false;
         this.showError = true;
         this.errorMessage = error;
         // this.loading = false;
      });
}


}
