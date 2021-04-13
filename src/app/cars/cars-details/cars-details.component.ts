import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../models/car';


@Component({
  selector: 'cs-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.less']
})

export class CarsDetailsComponent implements OnInit {
  car! : Car;

  constructor(private carsService: CarsService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCar();
  }

  loadCar(){
    const id = +this.route.snapshot.params['id'];
    this.carsService.getCar(id).subscribe((car)=> {
    this.car = car;
  });
  }
  
}
