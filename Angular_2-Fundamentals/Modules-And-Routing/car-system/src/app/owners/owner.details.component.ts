import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {OwnersData} from './owners.data';
import { CarsData } from '../cars/cars.data';

@Component({
    selector: 'owner-details',
    providers: [OwnersData, CarsData],
    templateUrl: './owner.details.component.html',
    styleUrls: ['./owners.details.css']
})
export class OwnerDetailsComponent{
    ownerId;
    owner;
    ownerCars;
    ownerDefaultImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGj_vhq1rswMIgx-rE4nINiY5hFEmhI4i4PeKjQXPgHsrdjFjR';
    
    constructor(
        private route: ActivatedRoute,
        private ownersData: OwnersData, 
        private carsData: CarsData){
            this.ownerId = this.route.snapshot.paramMap.get('id');
            this.owner = this.ownersData
            .getOwners()
            .filter((ownerObj) => {
                return ownerObj.id === parseInt(this.ownerId);
            })[0];

            this.ownerCars = this.carsData
                .getCars()
                .filter((carObj) => {
                    return carObj.ownerId == this.ownerId;
                })
    }
}