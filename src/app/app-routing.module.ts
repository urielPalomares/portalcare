import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsModule } from './components/modules/patients/patients.module'

@NgModule({
  imports: [
    PatientsModule
  ]
})
export class AppRoutingModule { }
