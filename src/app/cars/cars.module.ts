import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { SharedModule } from '../shared-module/shared.module';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CarsListComponent, TotalCostComponent, CarsDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [CarsListComponent,]
})
export class CarsModule { }
