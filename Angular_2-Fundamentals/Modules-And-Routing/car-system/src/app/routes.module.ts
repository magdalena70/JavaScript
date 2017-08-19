import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './cars/carDetails.component';
import { OwnersComponent } from './owners/owners.component';
import { OwnerDetailsComponent } from './owners/owner.details.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cars/all', component: CarsComponent },    
    { path: 'cars/details/:id', component: CarDetailsComponent }, 
    { path: 'owners/all', component: OwnersComponent },
    { path: 'owners/details/:id', component: OwnerDetailsComponent }          
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule { }