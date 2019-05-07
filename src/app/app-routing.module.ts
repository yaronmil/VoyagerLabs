import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'registrationForm', loadChildren: './modules/registration-form/registration-form.module#RegistrationFormModule' },
  { path: '**', redirectTo: 'registrationForm' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
