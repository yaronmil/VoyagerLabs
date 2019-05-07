import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
