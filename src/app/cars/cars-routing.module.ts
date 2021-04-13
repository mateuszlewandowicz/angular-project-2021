import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { CarsDetailsComponent } from './cars-details/cars-details.component'

const CARS_ROUTES: Route[] = [
  { path: 'cars/:id', component: <any>CarsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(CARS_ROUTES),
  ],
  exports: [
    RouterModule,
  ],

})

export class CarsRoutingModule { }