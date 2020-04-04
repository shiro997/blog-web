import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarrouselTemplate } from '../common/directives/carrousel.template';

// Enrutador de home
const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

// Modulo de home
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    CarouselModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    CarrouselTemplate
  ],
  providers: [
  ]
})
export class HomeModule { }