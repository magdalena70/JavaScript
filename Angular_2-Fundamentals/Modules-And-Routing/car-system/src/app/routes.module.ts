import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './cars/carDetails.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cars/all', component: CarsComponent },    
    { path: 'cars/details/:id', component: CarDetailsComponent }  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule { }