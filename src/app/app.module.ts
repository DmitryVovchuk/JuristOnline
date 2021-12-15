import { SharedModule } from './shared/shared.module';
import { SharedSpecificModule} from './shared-specific/shared-specific.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SocialLoginModule } from 'angularx-social-login';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AnketasSlidesComponent } from './anketas-slides/anketas-slides.component';
import { SuccessLoginComponent } from './success-login/success-login.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';

@NgModule({
  imports: [
    SharedSpecificModule,
    SharedModule,

    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistrationComponent,
    LoginComponent,
    AnketasSlidesComponent,
    SuccessLoginComponent,
    EmailConfirmationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
