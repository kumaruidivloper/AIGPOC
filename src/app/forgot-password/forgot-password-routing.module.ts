import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password.component';
import { ThailandComponent } from './thailand/thailand.component';
import { MalaysiaComponent } from './malaysia/malaysia.component';
import { DefaultComponent } from './default/default.component';


const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordComponent,
    children: [
      {
        path: 'th', component: ThailandComponent 
      },
      {
        path: 'ms', component: MalaysiaComponent
      },
      {
        path: 'en', component: DefaultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotPasswordRoutingModule { }