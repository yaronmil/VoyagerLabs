import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheFormComponent } from './the-form/the-form.component';

const routes: Routes = [
  { path: 'theForm', component: TheFormComponent },
  { path: '**',redirectTo:'theForm' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
