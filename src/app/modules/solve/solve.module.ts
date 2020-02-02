import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
} from '@angular/material';
import { SolveComponent } from './component';
import { SolveRoutingModule } from './solve-routing.module';
@NgModule({
    declarations: [
        SolveComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        SolveRoutingModule
    ],
})
export class SolveModule { }
