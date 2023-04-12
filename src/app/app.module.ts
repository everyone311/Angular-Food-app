import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';


import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

import { ViewFoodsComponent } from './view-foods/view-foods.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,

    ViewFoodsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
  ],



  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
