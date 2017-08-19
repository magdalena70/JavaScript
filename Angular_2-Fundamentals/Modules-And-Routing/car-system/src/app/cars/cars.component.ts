import { Component } from '@angular/core';
import { CarsData } from './cars.data';

@Component({
  selector: 'cars',
  providers: [CarsData],
  templateUrl: './cars.component.html',
  styleUrls: []
})
export class CarsComponent {
  title = 'All Cars';
  cars;
  allCarsLength: number;
  startIndex: number;
  count: number;
  page: number;

  constructor(private carsData: CarsData) {
    this.startIndex = this.startIndex || 0;
    this.count = this.count || 3;
    this.page = this.page || 1;
    this.cars = this.carsData.getCars(this.startIndex, this.count);
    this.allCarsLength = this.carsData.getCarsLength();
  }

  nextPage() {
    this.startIndex += 3;
    this.count += 3;
    this.cars = this.carsData.getCars(this.startIndex, this.count);
    if(this.cars.length > 0){
      this.page += 1;
    }

    return this.cars;
  }

  prevPage() {
    this.startIndex -= 3;
    this.count -= 3;
    this.cars = this.carsData.getCars(this.startIndex, this.count);
    if(this.cars.length > 0){
      this.page -= 1;
    }

    return this.cars;
  }

  sortBy(criteria) {
    return this.cars.sort((a, b) => {
      return a[criteria] > b[criteria];
    });
  }
}
