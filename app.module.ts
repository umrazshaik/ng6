import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeComponent } from './Employee/app.employee.component';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UsersComponent} from './Users';
import { NgonchangecomponentComponent } from './ngonchangecomponent/ngonchangecomponent.component';
import {NavbarComponent} from './navbar';
import {ModalPopupComponet} from './modalpopup';
import {ToastModule} from 'ng6-toastr/ng2-toastr';
import { observablepromise } from './observablespromise.component';

@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,HomeComponent, NgonchangecomponentComponent,UsersComponent,NavbarComponent,ModalPopupComponet,
    observablepromise
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,BrowserTransferStateModule,ToastModule.forRoot(),BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[NgonchangecomponentComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
