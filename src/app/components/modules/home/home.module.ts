import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component'
import { NbLayoutModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';

const routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbSidebarModule.forRoot()
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
