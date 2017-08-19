import { Component } from '@angular/core';
import { CarsData } from '../cars/cars.data';

@Component({
    selector: 'home',
    providers: [CarsData],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    title: string = 'Top 5 new cars';
    topFiveCars;
    carDefaultImageUrl = 'https://cms-assets.tutsplus.com/uploads/users/770/posts/24697/image/Car_tutorial_colour_selection';

    constructor(private carsData: CarsData){
        this.topFiveCars = this.carsData
            .getCars(0, 5)
            .sort((a, b) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            });
    }
}