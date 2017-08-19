import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsData } from './cars.data';

@Component({
    selector: 'car-details',
    providers: [CarsData],
    templateUrl: './carDetails.component.html',
    styleUrls: ['carDetails.component.css']
})

export class CarDetailsComponent {
    carId;
    car;
    carDefaultImageUrl = 'https://cms-assets.tutsplus.com/uploads/users/770/posts/24697/image/Car_tutorial_colour_selection';

    constructor(private route: ActivatedRoute, private carsData: CarsData) {
        this.carId = this.route.snapshot.paramMap.get('id');
        this.car = this.carsData
            .getCars()
            .filter((carObj) => {
                return carObj.id === parseInt(this.carId);
            })[0];
    }
}