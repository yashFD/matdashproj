import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { FormFetchComponent } from './form-fetch/form-fetch.component';

const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'form', component: FormFetchComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
