import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from "./layout/navbar/navbar.component";
import {MainComponent} from "./layout/main/main.component";
import {HomeComponent} from "./layout/home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {FormsModule} from "@angular/forms";
import {SignupComponent} from "./auth/signup/signup.component";
import {SameValidatorDirective} from "./directives/same-validator.directive";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    SameValidatorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
