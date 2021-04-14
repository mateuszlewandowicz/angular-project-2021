import { Component, OnInit, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Car } from "../models/car";
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from "../cars.service"
import { NgModule } from "@angular/core";
import { RouterModule, Route, Router } from '@angular/router';

@Component({
  selector: 'cs-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild("totalCostRef") totalCostRef!: TotalCostComponent;
  totalCost!: number;
  grossCost!: number;
  cars!: Car[];
  // cars: Car[]; = [
  //   {
  //     id: 1,
  //     model: 'Mazda Rx7',
  //     plate: 'GD2121E',
  //     deliveryDate: '21-04-2017',
  //     deadline: '05-05-2016',
  //     client: {
  //       firstName: 'Jan',
  //       surname: 'Kowalski'
  //     },
  //     cost: 300,
  //     isFullyDamaged: true
  //   },
  //   {
  //     id: 2,
  //     model: 'Mercedes 124',
  //     plate: 'KRK2200',
  //     deliveryDate: '24-05-2017',
  //     deadline: '03-06-2016',
  //     client: {
  //       firstName: 'Michał',
  //       surname: 'Nowak'
  //     },
  //     cost: 1200,
  //     isFullyDamaged: false
  //   },
  //   {
  //     id: 3,
  //     model: 'Renault CLIO',
  //     plate: 'GWE22011',
  //     deliveryDate: '02-02-2017',
  //     deadline: '03-03-2017',
  //     client: {
  //       firstName: 'Beata',
  //       surname: 'Dampc'
  //     },
  //     cost: 2800,
  //     isFullyDamaged: true
  //   },
  //   {
  //     id: 3,
  //     model: 'Renault MEGANE',
  //     plate: 'PJA238947',
  //     deliveryDate: '02-02-2017',
  //     deadline: '03-03-2017',
  //     client: {
  //       firstName: 'Mati',
  //       surname: 'Lewi'
  //     },
  //     cost: 5400,
  //     isFullyDamaged: false
  //   }
  // ];
  constructor(private carsService: CarsService,
              private router: Router) {

  }


  ngOnInit(): void {
    this.loadCars()


  }
  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.countTotalCost();
    })
  }

 goToCarDetails(car : Car) {
   this.router.navigate(['/cars', car.id]);
 }


  ngAfterViewInit() {
    this.totalCostRef.showGross();
  }

  showGross(): void {
    this.totalCostRef.showGross();
  }

  countTotalCost(): void {
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next);
  }

  onShowGross(grossCost: number): void {
    this.grossCost = grossCost;
  }

}
