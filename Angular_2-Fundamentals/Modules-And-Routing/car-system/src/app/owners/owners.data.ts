import { Injectable } from '@angular/core';

const allOwners = [
    {id: 1, name: 'Pesho Dimitrov', imageUrl: ''},
    {id: 2, name: 'Gosho Vasilev', imageUrl: ''},
    {id: 3, name: 'Penka Stancheva', imageUrl: ''},
    {id: 4, name: 'Minka Koleva', imageUrl: ''},
    {id: 5, name: 'Todor Kolev', imageUrl: ''},
    {id: 6, name: 'Vasilka Ivanova', imageUrl: ''},
    {id: 7, name: 'Ivan Georgiev', imageUrl: ''},                        
];

@Injectable()
export class OwnersData{
    getOwners(){
        return allOwners;
    }
}