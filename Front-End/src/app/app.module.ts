import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from "./components/layout/navbar/navbar.component";
import {MainComponent} from "./components/layout/main/main.component";
import {HomeComponent} from "./components/layout/home/home.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {FormsModule} from "@angular/forms";
import {SignupComponent} from "./components/auth/signup/signup.component";
import {SameValidatorDirective} from "./directives/same-validator.directive";
import {HttpClientModule} from "@angular/common/http";
import {TodosModule} from "./components/todos/todos.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    SameValidatorDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
