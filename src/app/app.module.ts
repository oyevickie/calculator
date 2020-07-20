import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ReactiveFormsModule } from '@angular/forms'
import { from } from 'rxjs';
import { TempleteComponent } from './templete/templete.component';
import { FormsModule } from '@angular/forms';
import { CalcComponent } from './calc/calc.component';
import { Temp2Component } from './temp2/temp2.component';
import { ReactComponent } from './react/react.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { TempletedrivenComponent } from './templetedriven/templetedriven.component'

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TempleteComponent,
    CalcComponent,
    Temp2Component,
    ReactComponent,
    LoginComponent,
    EmailComponent,
    TempletedrivenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CalculatorComponent]
})
export class AppModule { }
