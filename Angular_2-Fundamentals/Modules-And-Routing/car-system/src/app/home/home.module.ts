import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutesModule } from '../routes.module';

import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        AppRoutesModule
    ],
    providers: [],
    exports: [HomeComponent]
})
export class HomeModule {

}