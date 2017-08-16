import { Injectable } from '@angular/core';

@Injectable()
export class CarsData {
    getCars (){
        return [
            {
                id: 1,
                make: 'Opel', 
                model: 'Corsa', 
                imageUrl: '', 
                date: new Date('2015/08/22')},
            {
                id: 2,
                make: 'Ford', 
                model: 'Fiesta', 
                imageUrl: '', 
                date: new Date('2010/05/20')},
            {
                id: 3,
                make: 'BMW', 
                model: '305', 
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0UC2FKtfGUtAw_GGn_rPrnx0fmlUrTVeCuBlHJa_hSwkc6nq', 
                date: new Date('2016/10/12')},
            {
                id: 4,
                make: 'Suzuky', 
                model: 'Quatro', 
                imageUrl: '', 
                date: new Date('2008/01/04')},
            {
                id: 5,
                make: 'Ford', 
                model: 'Mustang', 
                imageUrl: '', 
                date: new Date('2008/09/30')}, 
            {
                id: 6,
                make: 'Opel', 
                model: 'Astra', 
                imageUrl: '', 
                date: new Date('2000/05/10')},
            {
                id: 7,
                make: 'Fiat', 
                model: 'Uno', 
                imageUrl: '', 
                date: new Date('2003/07/15')},
            {
                id: 8,
                make: 'Lada', 
                model: 'Niva', 
                imageUrl: '', 
                date: new Date('2011/09/19')}                                                          
        ]
    }
}