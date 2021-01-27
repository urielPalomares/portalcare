import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { PatientsComponent } from './patients.component'
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';

const routes = [
  {
    path: 'patients',
    component: PatientsComponent,
    children: [
      { path:'list', component: ListComponent }
    ]
  }
]


@NgModule({
  declarations: [
    PatientsComponent,
    ListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [PatientsComponent]
})
export class PatientsModule { }
