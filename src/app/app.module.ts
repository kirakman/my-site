import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Container1Component } from './components/container1/container1.component';
import { Container2Component } from './components/container2/container2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { Container3Component } from './components/container3/container3.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { StyleClassModule } from 'primeng/styleclass';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Container1Component,
    Container2Component,
    Container3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    CarouselModule,
    BreadcrumbModule,
    StyleClassModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
