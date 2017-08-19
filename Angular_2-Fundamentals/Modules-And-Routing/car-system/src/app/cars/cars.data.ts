import { Injectable } from '@angular/core';

const allCars = [
            {
                id: 1,
                make: 'Opel',
                model: 'Corsa',
                imageUrl: '',
                color: 'white',
                engine: '1.2',
                owner: 'Gosho Vasilev',
                ownerId: 2,
                description: 'Some description...about this car.',
                date: new Date('2015/08/22')
            },
            {
                id: 2,
                make: 'Ford',
                model: 'Fiesta',
                imageUrl: '',
                color: 'darkgreen',
                engine: '1.2', 
                owner: 'Gosho Vasilev',
                ownerId: 2,               
                description: 'Some description...about this car.',
                date: new Date('2010/05/20')
            },
            {
                id: 3,
                make: 'BMW',
                model: '305',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0UC2FKtfGUtAw_GGn_rPrnx0fmlUrTVeCuBlHJa_hSwkc6nq',
                color: 'white',
                engine: '2.0',  
                owner: 'Minka Koleva',
                ownerId: 4,              
                description: 'Some description...about this car.',
                date: new Date('2016/10/12')
            },
            {
                id: 4,
                make: 'Suzuky',
                model: 'Quatro',
                imageUrl: '', 
                color: 'black',
                engine: '1.6', 
                owner: 'Penka Stancheva',
                ownerId: 3,               
                description: 'Some description...about this car.',
                date: new Date('2008/01/04')
            },
            {
                id: 5,
                make: 'Ford',
                model: 'Mustang',
                imageUrl: '',
                color: 'red',
                engine: '1.9',
                owner: 'Gosho Vasilev',
                ownerId: 2,                
                description: 'Some description...about this car.',
                date: new Date('2008/09/30')
            },
            {
                id: 6,
                make: 'Opel',
                model: 'Astra',
                imageUrl: '',
                color: 'darkblue',
                engine: '1.6', 
                owner: 'Todor Kolev', 
                ownerId: 5,               
                description: 'Some description...about this car.',
                date: new Date('2000/05/10')
            },
            {
                id: 7,
                make: 'Fiat',
                model: 'Uno',
                imageUrl: '',
                color: 'gray',
                engine: '1.2',  
                owner: 'Vasilka Ivanova',
                ownerId: 6,                                             
                description: 'Some description...about this car.',
                date: new Date('2003/07/15')
            },
            {
                id: 8,
                make: 'Lada',
                model: 'Niva',
                imageUrl: '',
                color: 'white',
                engine: '1.6',
                owner: 'Todor Kolev', 
                ownerId: 5,                                                             
                description: 'Some description...about this car.',
                date: new Date('2011/09/19')
            },
            {
                id: 9,
                make: 'BMW',
                model: 'Q-6',
                imageUrl: '',
                color: 'black',
                engine: '2.0',  
                owner: 'Ivan Georgiev',
                ownerId: 7,                              
                description: 'Some description...about this car.',
                date: new Date('2013/01/02')
            },
            {
                id: 10,
                make: 'BMW',
                model: 'Q-6',
                imageUrl: '',
                color: 'silver',
                engine: '2.0',   
                owner: 'Pesho Dimitrov', 
                ownerId: 1,
                description: 'Some description...about this car.',
                date: new Date('2013/02/02')
            }
        ]

@Injectable()
export class CarsData {
    getCars(startIndex?, count?) {
        return allCars.slice(startIndex, count);
    }

    getCarsLength(){
        return allCars.length;
    }
}