import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './component';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        RouterModule,
    ],
})
export class HomeModule { }
