import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './routes.module';
import { HomeModule } from './home/home.module';
import { CarsModule } from './cars/cars.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HomeModule,
    CarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
