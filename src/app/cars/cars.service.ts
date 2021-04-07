import { Injectable } from '@angular/core';
import { Car } from './models/car';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { map } from "rxjs/operators";
import "rxjs";



@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private apiUrl = 'http://localhost:3000/api/cars';

  constructor(private http: HttpClient ) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>('http://localhost:3000/api/cars');
    // return this.http.get(this.apiUrl)
    //   .pipe(
    //     map((res) => <Car[]>res.json())
    //   );
  }
}
