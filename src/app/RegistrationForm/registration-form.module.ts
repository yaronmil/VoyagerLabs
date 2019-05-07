import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationFormRoutingModule } from './registration-form-routing.module';
import { RegistrationFormComponent } from './registration-form.component';

@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [
    CommonModule,
    RegistrationFormRoutingModule
  ]
})
export class RegistrationFormModule { }
