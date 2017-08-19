import { Component } from '@angular/core';
import { OwnersData } from './owners.data';

@Component({
  selector: 'owners',
  providers: [OwnersData],
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent{
    owners;
    ownerDefaultImageUrl = 'https://userscontent2.emaze.com/images/46991eb2-ce94-465e-adf4-dcaaa946fc90/75a6d7eb-33b7-413b-bb09-864d1913085c.png';
    
    constructor(private ownersData: OwnersData){
        this.owners = this.ownersData.getOwners();
    }

    sortByName(condition){
        if(condition === 'desc'){
            return this.owners.sort((a, b) => {
                return a.name < b.name;
            })
        }

        return this.owners.sort((a, b) => {
                return a.name > b.name;
            })
    }
}