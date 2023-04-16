import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewFoodsComponent } from './view-foods/view-foods.component';

import { ContactUsComponent } from './contact-us/contact-us.component';

import { AboutComponent } from './about/about.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';


const routes: Routes = [
  { path: 'Login', component: LoginPageComponent },
  { path: 'Register', component: RegisterPageComponent },
  { path: 'Home', component: HomepageComponent },
  {path:'viewFoods',component:ViewFoodsComponent},
  {path:'ContactUs',component:ContactUsComponent},
  {path:'about', component:AboutComponent},
  {path:'terms&Conditions', component:TermsAndConditionsComponent},

  { path: '', redirectTo: 'Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
