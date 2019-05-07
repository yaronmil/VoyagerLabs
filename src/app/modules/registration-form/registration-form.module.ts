import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationFormRoutingModule } from './registration-form-routing.module';
import { RegistrationFormLayoutComponent } from './pages/registration-form-layout/registration-form-layout.component';
import { MaterialModule } from 'src/app/shared/material-module';
import { RegistrationFormContentComponent } from './components/registration-form-content/registration-form-content.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegistrationFormLayoutComponent, RegistrationFormContentComponent],
  imports: [
    CommonModule,
    RegistrationFormRoutingModule,
    MaterialModule,ReactiveFormsModule
  ]
})
export class RegistrationFormModule { }
