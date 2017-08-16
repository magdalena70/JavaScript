import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutesModule } from '../routes.module';

import { CarsComponent } from './cars.component';
import { CarDetailsComponent } from './carDetails.component';

@NgModule({
    declarations: [
        CarsComponent,
        CarDetailsComponent
    ],
    imports: [
        CommonModule,
        AppRoutesModule
    ],
    providers: [],
    exports: [CarsComponent]
})
export class CarsModule {

}