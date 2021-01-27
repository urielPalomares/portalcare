import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsModule } from './components/modules/patients/patients.module'
import { HomeModule } from './components/modules/home/home.module';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' } // redirect to `first-component`
];

@NgModule({
  imports: [
    PatientsModule,
    HomeModule
  ]
})
export class AppRoutingModule { }
