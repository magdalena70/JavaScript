import { Component } from '@angular/core';
import {CarsData} from './cars.data';

@Component({
  selector: 'cars',
  providers: [CarsData],
  templateUrl: './cars.component.html',
  styleUrls: []
})
export class CarsComponent {
  title = 'All Cars';
  cars;
  
  constructor(private carsData: CarsData){
    this.cars = this.carsData.getCars();
  }
}
