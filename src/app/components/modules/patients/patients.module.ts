import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { PatientsComponent } from './patients.component'
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
import { NbLayoutModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';

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
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbSidebarModule.forRoot()
  ],
  bootstrap: [PatientsComponent]
})
export class PatientsModule { }
