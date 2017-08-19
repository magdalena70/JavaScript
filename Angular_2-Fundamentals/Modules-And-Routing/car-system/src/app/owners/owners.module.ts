import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutesModule } from '../routes.module';

import { OwnersComponent } from './owners.component';
import { OwnerDetailsComponent } from './owner.details.component';


@NgModule({
    declarations: [
        OwnersComponent,
        OwnerDetailsComponent
    ],
    imports: [
        CommonModule,
        AppRoutesModule
    ],
    providers: [],
    exports: [OwnersComponent]
})
export class OwnersModule{

}